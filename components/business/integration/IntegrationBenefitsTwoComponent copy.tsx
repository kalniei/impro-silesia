import { Grid, Box, Typography, Button, Card, CardContent } from '@mui/material';
import Colors from '../../../helpers/Colors';

interface PageProps {
  scrollTo: () => void;
}

interface IBenefitsLocalObj {
  title: string;
  benefits: string[];
}

const benefitsArr: IBenefitsLocalObj[] = [
  {
    title: 'społecznie',
    benefits: [
      'wystąpienia publiczne',
      'komunikacja',
      'uważność i słuchanie',
      'współpraca',
      'coś co Szym wymyśli'
    ]
  },
  {
    title: 'indywidualnie',
    benefits: [
      'pewność siebie',
      'pozwolenie sobie na błędy',
      'kreatywność',
      'spontaniczność',
      'inteligencja emocjonalna'
    ]
  },
  {
    title: 'impro',
    benefits: [
      'oddawanie kontroli',
      'obudzenie wewm. dziecka',
      'świadomość',
      'humor i storytelling',
      'impro i aktorstwo'
    ]
  }
];

const IntegrationBenefitsTwoComponent = ({ scrollTo }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h2" textAlign="center">
          Trening impro -{' '}
          <Box component="span" color={Colors.mainOrange}>
            co mi to da
          </Box>
        </Typography>

        <Typography textAlign="center" mt={1} color={Colors.grey} fontSize={15}>
          Warsztaty improwizacji rozwijają szereg{' '}
          <Box component="span" color={Colors.black}>
            umiętności
          </Box>{' '}
          których pełna lista by się tutaj nie zmieściła ;)
        </Typography>

        <Grid container justifyContent="center" mt={8}>
          {benefitsArr.map((x: IBenefitsLocalObj, keyX: number) => (
            <Grid item xs={12} md={6} lg={4} key={keyX} px={3} sx={{ mb: { xs: 4, mb: 6, lg: 0 } }}>
              <Card>
                <CardContent>
                  <Typography
                    color={Colors.grey}
                    fontSize={21}
                    textTransform="uppercase"
                    fontWeight="500"
                    mb={3}
                  >
                    {x.title}
                  </Typography>
                  {x.benefits.map((y: string, keyY: number) => (
                    <Grid container key={keyY} alignItems="center" mb={4}>
                      <Grid item>
                        <Box
                          sx={{
                            backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`,
                            height: '12px',
                            width: '12px',
                            borderRadius: '50%',
                            marginRight: '16px'
                          }}
                        ></Box>
                      </Grid>
                      <Grid item>
                        <Typography fontSize={16} textTransform="uppercase" fontWeight="600">
                          {y}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center" mt={8}>
          <Button
            variant="custom"
            onClick={scrollTo}
            sx={{ padding: '8px 68px', textTransform: 'uppercase' }}
          >
            Zapisz się
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default IntegrationBenefitsTwoComponent;
