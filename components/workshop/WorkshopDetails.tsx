import { Grid, Typography } from '@mui/material';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import Colors from '../../helpers/Colors';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
  orangeText: {
    color: Colors.mainOrange
  }
}));

interface PageProps {
  workshopDetails: IBasicWorkshopObj;
}

const WorkshopDetails = ({ workshopDetails }: PageProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Grid container alignItems="center">
          <Grid item>
            <Image src="/img/icons/clock.png" width="50px" height="50px" alt="clock" />
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
            <Image src="/img/icons/wallet.png" width="50px" height="50px" alt="wallet" />
          </Grid>
          <Grid item ml={1}>
            <Typography variant="h5" className={classes.orangeText}>
              {workshopDetails.price_sale}/{workshopDetails.price_normal} pln
            </Typography>
            <Typography variant="subtitle2">taniej do {workshopDetails.price_date}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ pl: { xs: 0, sm: 1 }, mt: { xs: 4, sm: 0 } }}>
        <Grid container>
          <Grid item>
            <Image src="/img/icons/calendar.png" width="50px" height="50px" alt="calendar" />
          </Grid>
          <Grid item ml={1} pt={0}>
            <>
              {workshopDetails.workshop_dates.map((item, i) => (
                <Typography
                  variant="h5"
                  key={i}
                  className={i === 0 ? classes.orangeText : ''}
                  mt={1}
                  sx={{ px: { xs: 0, sm: 1 } }}
                >
                  {item}
                </Typography>
              ))}
            </>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={10} my={4}>
        {workshopDetails.additional_info?.map((item, i) => (
          <Typography key={i} variant="subtitle2">
            - {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default WorkshopDetails;
