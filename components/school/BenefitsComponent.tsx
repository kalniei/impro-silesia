import { Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Colors from '../../helpers/Colors';

interface IBenefitsObj {
  imgName: string;
  text: string;
}

interface PageProps {
  scrollToWorkshops: () => void;
}

const benefitsArr: IBenefitsObj[] = [
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

const BenefitsComponent = ({ scrollToWorkshops }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h1" textAlign="center">
          Naucz się impro i zdobądź:
        </Typography>
        <Grid container>
          {benefitsArr.map((x: IBenefitsObj, key: number) => (
            <Grid
              key={key}
              container
              justifyContent="center"
              item
              md={4}
              sm={6}
              xs={12}
              sx={{ mt: { xs: 4, sm: 6, md: 8 } }}
            >
              <Grid item textAlign="center">
                <Image src={`/img/${x.imgName}.png`} width="100px" height="100px" alt={x.imgName} />
                <Box
                  sx={{
                    color: Colors.black,
                    fontSize: 19,
                    fontWeight: 800,
                    borderRadius: 3,
                    width: '230px',
                    height: '50px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-8px',
                    lineHeight: '1',
                    borderBottom: `4px solid ${Colors.mainOrange}`
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: x.text }} />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
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

export default BenefitsComponent;
