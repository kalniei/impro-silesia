import { Grid } from '@mui/material';
import { useRef, useState } from 'react';
import BannerComponent from './BannerComponent';
import BenefitsComponent from './BenefitsComponent';
import DetailedInfoComponent from './DetailedInfoComponent';
import WorkshopsComponent from './WorkshopsComponent';

const SchoolMain = (): JSX.Element => {
  const [workshopsRef, setWorkshopsRef] = useState<any>(null);
  const bottomRef = useRef<HTMLImageElement>(null);

  const scrollToWorkshops = () => {
    if (!workshopsRef) return;
    window.scrollTo({ behavior: 'smooth', top: workshopsRef.current?.offsetTop });
  };

  const scrollToBottom = () => {
    if (!bottomRef) return;
    window.scrollTo({ behavior: 'smooth', top: bottomRef.current?.offsetTop });
  };

  return (
    <Grid container>
      <BannerComponent scrollToWorkshops={scrollToWorkshops} scrollToBottom={scrollToBottom} />
      <Grid ref={bottomRef} container item>
        <BenefitsComponent scrollToWorkshops={scrollToWorkshops} />
      </Grid>
      <DetailedInfoComponent scrollToWorkshops={scrollToWorkshops} />
      <WorkshopsComponent setMyRef={setWorkshopsRef} />
    </Grid>
  );
};

export default SchoolMain;
