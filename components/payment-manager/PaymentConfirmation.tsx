import { Grid, Typography } from '@mui/material';

const PaymentConfirmation = (): JSX.Element => {
  return (
    <Grid container justifyContent="center" m={2}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2" mb={2}>
            Dziękujmy za wpłate!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentConfirmation;
