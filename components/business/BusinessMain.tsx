import { Grid } from '@mui/material';
import { useRef, useState } from 'react';
import { IBannerObj } from '../../ts/interfaces';
import BannerComponent from '../common/BannerComponent';
import ContactMain from '../contact/ContactMain';
import OfferComponent from './OfferComponent';

const bannerObj: IBannerObj = {
  mainHeader: 'Teatr Improwizacji',
  secondaryHeader: 'dla twojej organizacji',
  secondaryHeaderFont: { xs: 23, sm: 31.5, md: 41, lg: 49.5 },
  bodyText: 'Warsztaty, speltakle i integracje <br /> na twoim evencie, w firmie i zespole!',
  imgPath: 'tytułowaOferta.jpg',
  orangeButtonName: 'Skontaktuj się',
  whiteButtonName: 'Dowiedz się więcej'
};

const BusinessMain = (): JSX.Element => {
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
        <OfferComponent scrollToContact={scrollToContact} />
      </Grid>
      <ContactMain setMyRef={setContactRef} />
    </Grid>
  );
};

export default BusinessMain;
