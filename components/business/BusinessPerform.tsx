import { Grid } from '@mui/material';
import { useRef, useState } from 'react';
import { IBannerObj } from '../../ts/interfaces';
import BannerComponent from '../common/BannerComponent';
import ContactMain from '../contact/ContactMain';
import PerformanceBenefitsTwoComponent from './performance/PerformanceBenefitsTwoComponent';
import PerformanceInformationComponentOne from './performance/PerformanceInformationComponentOne';
import PerformanceInformationComponentThree from './performance/PerformanceInformationComponentThree';
import PerformanceInformationComponentTwo from './performance/PerformanceInformationComponentTwo';
import PerformanceTechDetailsComponent from './performance/PerformanceTechDetailsComponent';
import PerformanceWorkshopsComponent from './performance/PerformanceWorkshopsComponent';

const bannerObj: IBannerObj = {
  mainHeader: 'Komedia impro',
  secondaryHeader: 'Na twoim evencie',
  secondaryHeaderFont: { xs: 26, sm: 36, md: 46, lg: 54 },
  bodyText: 'Personalizowane, angażujące <br> spektakle, dopasowane do <br> Twojego wydarzenia!',
  imgPath: 'teatrDlaFirm.jpg',
  orangeButtonName: 'Skontaktuj się',
  whiteButtonName: 'Dowiedz się więcej'
};

const BusinessPerform = (): JSX.Element => {
  const [contactRef, setContactRef] = useState<any>(null);
  const bottomRef = useRef<HTMLImageElement>(null);

  const scrollToContact = () => {
    if (!contactRef) return;
    window.scrollTo({ behavior: 'smooth', top: contactRef.current?.offsetTop });
  };

  const scrollToBottom = () => {
    if (!bottomRef) return;
    window.scrollTo({ behavior: 'smooth', top: bottomRef.current?.offsetTop });
  };

  return (
    <Grid container>
      <BannerComponent
        bannerObj={bannerObj}
        orangeButtonAction={scrollToContact}
        whiteButtonAction={scrollToBottom}
      />
      <Grid ref={bottomRef} container item>
        <PerformanceInformationComponentOne scrollTo={scrollToContact} />
      </Grid>
      <PerformanceTechDetailsComponent scrollTo={scrollToContact} />
      <PerformanceBenefitsTwoComponent scrollTo={scrollToContact} />
      <PerformanceInformationComponentTwo scrollTo={scrollToContact} />
      <PerformanceInformationComponentThree scrollTo={scrollToContact} />
      <PerformanceWorkshopsComponent scrollTo={scrollToContact} />
      <ContactMain setMyRef={setContactRef} />
    </Grid>
  );
};

export default BusinessPerform;
