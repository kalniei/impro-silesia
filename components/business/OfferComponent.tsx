import { Grid, Box, Typography, Button } from '@mui/material';
import { IActionObj } from '../../ts/interfaces';
import ActionElements from '../common/ActionElements';

interface PageProps {
  scrollToContact: () => void;
}

const benefitsArr: IActionObj[] = [
  {
    imgName: 'friend',
    text: 'integracje',
    actionText: 'dowiedź się wiecej...',
    actionPath: '/oferta_integracje'
  },
  {
    imgName: 'self-esteem',
    text: 'szkolenia',
    actionText: 'dowiedź się wiecej...',
    actionPath: '/oferta_szkolenia'
  },
  {
    imgName: 'theatre',
    text: 'spektakle',
    actionText: 'dowiedź się wiecej...',
    actionPath: '/oferta_spektakle'
  }
];

const OfferComponent = ({ scrollToContact }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h2" textAlign="center">
          Improwizacja może zagościć u ciebie w różnej formie:
        </Typography>
        <ActionElements infoArray={benefitsArr} />
        <Grid container pl={3}>
          <Typography variant="body1" mt={8} fontWeight={500}>
            Nie znalazłeś tego czego szukasz? Project specialny? <br /> Skontaktuj się z nami -
            pomożemy!
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
