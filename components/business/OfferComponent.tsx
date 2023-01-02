import { Grid, Box, Typography, Button } from '@mui/material';
import Colors from '../../helpers/Colors';
import { IActionObj } from '../../ts/interfaces';
import ActionElements from '../common/ActionElements';

interface PageProps {
  scrollToContact: () => void;
}

const benefitsArr: IActionObj[] = [
  // {
  //   imgName: 'friend',
  //   mainText: 'szkolenia <br /> dla firm',
  //   secondaryText: 'improwizacja stosowana',
  //   actionPath: '/szkolenia_impro',
  //   isOrange: true
  // },
  {
    imgName: 'theatre',
    mainText: 'spektakle <br> na eventy',
    secondaryText: 'personalizowane',
    actionPath: '/spektakle_impro',
    isOrange: false
  },
  {
    imgName: 'self-esteem',
    mainText: `integracje <br /> firmowe`,
    secondaryText: 'najlepsze w polsce',
    actionPath: '/integracja_impro',
    isOrange: true
  }
];

const OfferComponent = ({ scrollToContact }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h2" textAlign="center">
          Improwizacja może zagościć u ciebie w różnej formie:
        </Typography>
        <Typography variant="subtitle1">
          Możemy działać bardzo poważnie i poważnie śmiesznie!
        </Typography>
        <ActionElements infoArray={benefitsArr} />
        <Grid container pl={3}>
          <Typography component="div" variant="body1" mt={8} fontWeight={500}>
            Nie znalazłeś tego czego szukasz? Project specialny? <br />{' '}
            <Box color={Colors.grey}>Skontaktuj się z nami - pomożemy!</Box>
          </Typography>
        </Grid>
        <Grid container justifyContent="center" mt={4}>
          <Button
            variant="custom"
            onClick={scrollToContact}
            sx={{ padding: '8px 68px', textTransform: 'uppercase' }}
          >
            Skontaktuj się
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default OfferComponent;
