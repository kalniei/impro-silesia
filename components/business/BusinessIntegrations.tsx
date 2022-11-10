import { Grid } from '@mui/material';
import { useRef, useState } from 'react';
import { IBannerObj } from '../../ts/interfaces';
import BannerComponent from '../common/BannerComponent';

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
      />{' '}
    </Grid>
  );
};

export default BusinessIntegrations;
