import { Grid } from '@mui/material';
import { useState } from 'react';
import BenefitsComponent from './BenefitsComponent';
import DetailedInfoComponent from './DetailedInfoComponent';
import WorkshopsComponent from './WorkshopsComponent';

const SchoolMain = (): JSX.Element => {
  const [myRef, setRef] = useState<any>(null);

  const scrollToWorkshops = () => {
    if (!myRef) return;
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop });
  };

  return (
    <Grid container>
      <BenefitsComponent scrollToWorkshops={scrollToWorkshops} />
      <DetailedInfoComponent scrollToWorkshops={scrollToWorkshops} />
      <WorkshopsComponent setMyRef={setRef} />
    </Grid>
  );
};

export default SchoolMain;
