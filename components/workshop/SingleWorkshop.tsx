import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import getErrorMessage from '../../helpers/getErrorMessage';
import { request } from '../../helpers/restClient';
import useSnackbar from '../../snackbar/useSnackbar';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import { Card } from '@mui/material';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const SingleWorkshopPage = (): JSX.Element => {
  const [workshopDetails, setWorkshopDetails] = useState<IBasicWorkshopObj | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const router = useRouter();
  const snackbar = useSnackbar();

  const getWorkshopDetails = async (id: string) => {
    try {
      const { data } = await request('post', '/getBasicWorkshopById', { path: id });
      setWorkshopDetails(
        data?.length && {
          ...data[0],
          workshop_dates: JSON.parse(data[0]?.workshop_dates)
        }
      );
    } catch (error: any) {
      snackbar.showMessage(
        getErrorMessage(error, 'W naszej bazie nie istneje takich warsztatów'),
        'error'
      );
      setIsError(true);

      return;
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query?.id) {
      getWorkshopDetails(router.query.id as string);
    } else {
      snackbar.showMessage('Coś poszło nie tak z realizowaniem płatnośći', 'error');
      setIsError(true);
    }
  }, [router.isReady]);

  return (
    <Grid container justifyContent="center" m={2}>
      {workshopDetails && (
        <Card sx={{ width: '80%' }}>
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Grid item>
                  <Typography variant="h5" sx={{ fontSize: 20 }}>
                    <Typography component="span" sx={{ fontWeight: 800, fontSize: 20 }}>
                      {workshopDetails.name}
                    </Typography>
                    -{workshopDetails.day_of_week}
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <WatchLaterOutlinedIcon sx={{ fontSize: 50 }} />
                      </Grid>
                      <Grid item ml={1}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: 14,
                            fontWeight: 700,
                            borderRadius: 1,
                            backgroundColor: 'orange'
                          }}
                          p={0}
                        >
                          {workshopDetails.workshop_dates?.length} x {workshopDetails.duration}h
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container alignItems="center">
                      <Grid item>
                        <CreditCardIcon sx={{ fontSize: 50, fontWeight: 700 }} />
                      </Grid>
                      <Grid item ml={1}>
                        <Typography
                          variant="h6"
                          sx={{ fontSize: 14, fontWeight: 700 }}
                          pb={0}
                          pt={0}
                        >
                          <Typography
                            component="span"
                            sx={{
                              fontWeight: 700,
                              fontSize: 14,
                              borderRadius: 1,
                              backgroundColor: 'orange'
                            }}
                            mr={1}
                          >
                            {workshopDetails.price_sale}/{workshopDetails.price_normal}
                          </Typography>
                          pln
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: 11, fontWeight: 700 }}
                          color="text.secondary"
                          pt={0}
                        >
                          taniej do {workshopDetails.price_date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6}>
                    <Grid container>
                      <Grid item>
                        <CalendarMonthIcon sx={{ fontSize: 50 }} />
                      </Grid>
                      <Grid item ml={1} pt={0}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: 14,
                            fontWeight: 700,
                            borderRadius: 1,
                            backgroundColor: 'orange'
                          }}
                        >
                          {
                            workshopDetails.workshop_dates.map((item, i) => (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            ))[0]
                          }
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 700 }}>
                          {workshopDetails.workshop_dates
                            .map((item, i) => (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            ))
                            .slice(1, workshopDetails.workshop_dates.length)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid pt="20" item mt={5} mr={15}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      - 18 godzin warsztatów
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      - możliwośc odrobienia nieobecnośći z inną grupą
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      - pierwsze zajęcia są niezobowiązujące: jeśli zrezygnujesz z kursu - oddamy Ci
                      pienądze
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      - certyfikat
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      - dostęp społecznoności Impro Silesia
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      {isError && (
        <Typography>
          Coś poszło nie tak z realizowaniem płatnośći, skontaktuj sie z nami lub zapłać:
        </Typography>
      )}
    </Grid>
  );
};

export default SingleWorkshopPage;
