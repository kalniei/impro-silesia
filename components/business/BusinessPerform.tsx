import { Grid } from '@mui/material';
import { useRef, useState } from 'react';
import { IBannerObj } from '../../ts/interfaces';
import BannerComponent from '../common/BannerComponent';

const bannerObj: IBannerObj = {
  mainHeader: 'Teatr Improwizacji',
  secondaryHeader: 'Dla twojej organizacji',
  secondaryHeaderFont: { xs: 20, sm: 31.5, md: 41, lg: 49 },
  bodyText: 'Warsztaty, spektakle i integracje <br /> na twoim evencie, w firmie i zespole!',
  imgPath: 'teatrDlaFirm.jpg',
  orangeButtonName: 'Skontaktuj się',
  whiteButtonName: 'Dowiedz się więcej'
};

const BusinessPerform = (): JSX.Element => {
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
    </Grid>
  );
};

export default BusinessPerform;
