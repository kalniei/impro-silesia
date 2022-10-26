import { Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Colors from '../../helpers/Colors';

interface IBenefitsObj {
  imgName: string;
  text: string;
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

const BenefitsComponent = (): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h1" textAlign="center">
          Naucz się impro i zdabądź:
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
                    color: Colors.white,
                    fontSize: 19,
                    fontWeight: 800,
                    borderRadius: 3,
                    width: '230px',
                    height: '50px',
                    textAlign: 'center',
                    backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`,
                    textTransform: 'uppercase',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-8px',
                    lineHeight: '1'
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: x.text }} />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            variant="h1"
            display="block"
            textAlign="center"
            mt={8}
            sx={{
              borderBottom: `4px solid ${Colors.mainOrange}`
            }}
          >
            W życiu, biznesie i na scenie!
          </Typography>
        </Grid>
        <Grid container justifyContent="center" mt={4}>
          <Button variant="black">Zapisz się</Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default BenefitsComponent;
