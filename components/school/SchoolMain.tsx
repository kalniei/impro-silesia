import { Grid } from '@mui/material';
import BenefitsComponent from './BenefitsComponent';
import WorkshopsComponent from './WorkshopsComponent';

const SchoolMain = (): JSX.Element => {
  return (
    <Grid container>
      <BenefitsComponent />
      <WorkshopsComponent />
    </Grid>
  );
};

export default SchoolMain;
