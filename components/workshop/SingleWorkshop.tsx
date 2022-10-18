import {
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

  console.log(workshopDetails);

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
          <CardHeader title={workshopDetails.name} />
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <WatchLaterOutlinedIcon sx={{ fontSize: 50 }} />
                      </Grid>
                      <Grid item ml={1}>
                        <Typography variant="h5">
                          {workshopDetails.workshop_dates?.length} x {workshopDetails.duration}h
                        </Typography>
                      </Grid>
                    </Grid>

                    <Typography variant="h5">
                      <CreditCardIcon fontSize="large"></CreditCardIcon>
                      {workshopDetails.price_sale}/{workshopDetails.price_normal} pln
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      taniej do {workshopDetails.price_date}
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="h5" component="div">
                      <CalendarMonthIcon fontSize="large"></CalendarMonthIcon>
                      {workshopDetails.workshop_dates.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary">
                  hhghffffff
                </Typography>
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
