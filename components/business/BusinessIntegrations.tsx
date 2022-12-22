import { Grid } from '@mui/material';
import { useRef, useState } from 'react';
import { IBannerObj } from '../../ts/interfaces';
import BannerComponent from '../common/BannerComponent';
import VideoOpinions from '../common/VideoOpinions';
import ContactMain from '../contact/ContactMain';
import IntegrationBenefitsComponent from './integration/IntegrationBenefitsComponent';
import IntegrationBenefitsTwoComponent from './integration/IntegrationBenefitsTwoComponent copy';
import IntegrationInformationComponentOne from './integration/IntegrationInformationComponentOne';
import IntegrationInformationComponentTwo from './integration/IntegrationInformationComponentTwo';
import IntegrationMethodComponent from './integration/IntegrationMethodComponent';
import IntegrationPerformanceComponent from './integration/IntegrationPerformanceComponent';
import IntegrationTechDetailsComponent from './integration/IntegrationTechDetailsComponent';

const bannerObj: IBannerObj = {
  mainHeader: '2 tony integracji',
  secondaryHeader: 'dzięki improwizacji',
  secondaryHeaderFont: { xs: 21.5, sm: 34, md: 45, lg: 53.5 },
  bodyText: 'Prawdopodobnie najlepsza <br /> integracja dla Waszego zespołu!',
  imgPath: 'integracjaDlaFirm.jpg',
  orangeButtonName: 'Skontaktuj się',
  whiteButtonName: 'Dowiedz się więcej'
};

const BusinessIntegrations = (): JSX.Element => {
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
      <IntegrationInformationComponentOne scrollTo={scrollToContact} />
      <IntegrationBenefitsComponent scrollTo={scrollToContact} />
      <IntegrationMethodComponent scrollTo={scrollToContact} />
      <IntegrationInformationComponentTwo scrollTo={scrollToContact} />
      <IntegrationTechDetailsComponent scrollTo={scrollToContact} />
      <IntegrationBenefitsTwoComponent scrollTo={scrollToContact} />
      <VideoOpinions />
      <IntegrationPerformanceComponent scrollTo={scrollToContact} />
      <ContactMain setMyRef={setContactRef} />
    </Grid>
  );
};

export default BusinessIntegrations;
