import { Grid } from '@mui/material';
import OfferComponent from './OfferComponent';

const BusinessMain = (): JSX.Element => {
  return (
    <Grid container>
      <OfferComponent
        scrollToContact={() => {
          return;
        }}
      />
    </Grid>
  );
};

export default BusinessMain;
