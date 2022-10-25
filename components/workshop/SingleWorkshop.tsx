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
import Colors from '../../helpers/Colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  orangeText: {
    color: Colors.mainOrange
  },
  icon: {
    fontSize: '50px'
  }
}));

const SingleWorkshopPage = (): JSX.Element => {
  const [workshopDetails, setWorkshopDetails] = useState<IBasicWorkshopObj | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const router = useRouter();
  const snackbar = useSnackbar();
  const classes = useStyles();

  const getWorkshopDetails = async (id: string) => {
    try {
      const { data } = await request('post', '/getBasicWorkshopById', { path: id });
      setWorkshopDetails(
        data?.length && {
          ...data[0],
          workshop_dates: JSON.parse(data[0]?.workshop_dates),
          additional_info: JSON.parse(data[0]?.additional_info)
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
                <Grid item mb={2}>
                  <Typography variant="h2" component="span">
                    {workshopDetails.name} -{' '}
                  </Typography>
                  <Typography variant="h2" component="span" fontWeight="400">
                    {workshopDetails.day_of_week}
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <WatchLaterOutlinedIcon className={classes.icon} />
                      </Grid>
                      <Grid item ml={1}>
                        <Typography variant="h5" className={classes.orangeText}>
                          {workshopDetails.workshop_dates?.length} x {workshopDetails.duration}h
                        </Typography>
                        <Typography variant="subtitle2">{workshopDetails.time}</Typography>
                      </Grid>
                    </Grid>

                    <Grid container alignItems="center" mt={4}>
                      <Grid item>
                        <CreditCardIcon className={classes.icon} />
                      </Grid>
                      <Grid item ml={1}>
                        <Typography variant="h5" className={classes.orangeText}>
                          {workshopDetails.price_sale}/{workshopDetails.price_normal} pln
                        </Typography>
                        <Typography variant="subtitle2">
                          taniej do {workshopDetails.price_date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} pl={1}>
                    <Grid container>
                      <Grid item>
                        <CalendarMonthIcon className={classes.icon} />
                      </Grid>
                      <Grid item ml={1} pt={0}>
                        <>
                          {workshopDetails.workshop_dates.map((item, i) => (
                            <Typography
                              variant="h5"
                              key={i}
                              className={i === 0 ? classes.orangeText : ''}
                              mt={1}
                              px={1}
                            >
                              {item}
                            </Typography>
                          ))}
                        </>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item mt={4}>
                    {workshopDetails.additional_info?.map((item, i) => (
                      <Typography key={i} variant="subtitle2">
                        - {item}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      {isError && <Typography>Niestety takich warsztatów nie ma w naszej ofercie</Typography>}
    </Grid>
  );
};

export default SingleWorkshopPage;
