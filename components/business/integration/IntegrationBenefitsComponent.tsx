import { Grid, Box, Typography, Button } from '@mui/material';
import Colors from '../../../helpers/Colors';
import { IInfoObj } from '../../../ts/interfaces';
import InfoElements from '../../common/InfoElements';

interface PageProps {
  scrollTo: () => void;
}

const benefitsArr: IInfoObj[] = [
  {
    imgName: 'friend',
    text: 'integracja'
  },
  {
    imgName: 'inspiration',
    text: 'świetna zabawa'
  },
  {
    imgName: 'change',
    text: 'pozytywna energia'
  },
  {
    imgName: 'checked',
    text: 'sprawdzony wybór'
  },
  {
    imgName: 'fight',
    text: 'nauka współpracy'
  },
  {
    imgName: 'laugh',
    text: 'humor'
  }
];

const IntegrationBenefitsComponent = ({ scrollTo }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h2" textAlign="center">
          <Box component="span" color={Colors.mainOrange}>
            Najlepsza integracja{' '}
          </Box>
          dla waszego zespołu
        </Typography>

        <InfoElements infoArray={benefitsArr} />

        <Grid container justifyContent="center" mt={8}>
          <Button
            variant="custom"
            onClick={scrollTo}
            sx={{ padding: '8px 68px', textTransform: 'uppercase' }}
          >
            Zapytaj o ofertę
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default IntegrationBenefitsComponent;
