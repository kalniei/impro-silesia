import { Grid } from '@mui/material';
import { useRef, useState } from 'react';
import { IBannerObj } from '../../ts/interfaces';
import BannerComponent from '../common/BannerComponent';
import TextOpinionsComponent from '../common/TextOpinionsComponent';
import SchoolBenefitsComponent from './SchoolBenefitsComponent';
import DetailedInfoComponent from './DetailedInfoComponent';
import WorkshopsComponent from './WorkshopsComponent';

const bannerObj: IBannerObj = {
  mainHeader: 'Szkoła Impro Silesia',
  secondaryHeader: 'Warsztaty Improwizacji',
  secondaryHeaderFont: { xs: 20, sm: 31.5, md: 41, lg: 49 },
  bodyText: 'Techniki teatru impro <br /> w życiu biznesie i na scenie!',
  imgPath: 'schoolMain.jpg',
  orangeButtonName: 'Zapisz się',
  whiteButtonName: 'Dowiedz się więcej'
};

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
      <BannerComponent
        bannerObj={bannerObj}
        orangeButtonAction={scrollToWorkshops}
        whiteButtonAction={scrollToBottom}
      />
      <Grid ref={bottomRef} container item>
        <SchoolBenefitsComponent scrollToWorkshops={scrollToWorkshops} />
      </Grid>
      <DetailedInfoComponent scrollToWorkshops={scrollToWorkshops} />
      <TextOpinionsComponent />
      <WorkshopsComponent setMyRef={setWorkshopsRef} />
    </Grid>
  );
};

export default SchoolMain;
