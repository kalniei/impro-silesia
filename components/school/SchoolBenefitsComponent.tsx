import { Grid, Box, Typography, Button } from '@mui/material';
import { IInfoObj } from '../../ts/interfaces';
import InfoElements from '../common/InfoElements';

interface PageProps {
  scrollToWorkshops: () => void;
}

const benefitsArr: IInfoObj[] = [
  {
    imgName: 'self-esteem',
    text: 'pewność siebie'
  },
  {
    imgName: 'inspiration',
    text: 'spontanoczność'
  },
  {
    imgName: 'change',
    text: 'lepsze samopoczucie'
  },
  {
    imgName: 'friend',
    text: 'lepsze relacje'
  },
  {
    imgName: 'speech',
    text: 'mniej stresu <br> w wystąpieniach'
  },
  {
    imgName: 'theatre',
    text: 'techniki impro'
  }
];

const SchoolBenefitsComponent = ({ scrollToWorkshops }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h1" textAlign="center">
          Naucz się impro i zdobądź:
        </Typography>
        <InfoElements infoArray={benefitsArr} />
        <Grid container justifyContent="center">
          <Typography variant="h1" display="block" textAlign="center" mt={8}>
            W życiu, biznesie i na scenie!
          </Typography>
        </Grid>
        <Grid container justifyContent="center" mt={4}>
          <Button variant="custom" onClick={scrollToWorkshops} sx={{ padding: '8px 68px' }}>
            Zapisz się
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SchoolBenefitsComponent;
