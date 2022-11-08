import { Grid } from '@mui/material';
import SingleWorkshop from '../../components/workshop/SingleWorkshop';

const SingleWorkshopPage = (): JSX.Element => {
  return (
    <Grid container mt={4}>
      <SingleWorkshop />
    </Grid>
  );
};

export default SingleWorkshopPage;
