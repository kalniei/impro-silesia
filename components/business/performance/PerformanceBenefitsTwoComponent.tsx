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
    title: '1. USTALAMY SZCZEGÓŁY',
    benefits: [
      'Słuchamy czego potrzebujesz. Dopasujemy rozwiązanie. Ustalamy termin, miejsce, honorarium, rider techniczny i szczegóły wydarzenia.'
    ]
  },
  {
    title: '2. ROBIMY WYWIAD',
    benefits: [
      'Zbieramy informacje nt. Waszej firmy, wyjątkowych osób, zabawnych powiedzonek, anegdot, terminów branżowych, klimatu wydarzenia itp.'
    ]
  },
  {
    title: '3. BAWIMY!',
    benefits: [
      'W trakcie spektaklu wplatamy info z wywiadu do spektaklu, dodatkowo zbieramy inspiracje od publiczności na żywo.'
    ]
  }
];

const PerformanceBenefitsTwoComponent = ({ scrollTo }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6}>
      <Typography variant="h2" textAlign="center">
        <Box component="span" color={Colors.mainOrange}>
          Jak{' '}
        </Box>
        to działa?
      </Typography>

      <Typography variant="subtitle1">Krok po kroku</Typography>

      <Grid
        container
        item
        sx={{ backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})` }}
        mt={4}
      >
        <Box className="maxWidth">
          <Grid container justifyContent="center" my={8}>
            {benefitsArr.map((x: IBenefitsLocalObj, keyX: number) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={keyX}
                px={3}
                sx={{ mb: { xs: 4, mb: 6, lg: 0 } }}
              >
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
                      <Grid container key={keyY} mb={4}>
                        <Grid item xs={1}>
                          <Box
                            sx={{
                              backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`,
                              height: '12px',
                              width: '12px',
                              borderRadius: '50%',
                              marginRight: '16px',
                              mt: 1
                            }}
                          ></Box>
                        </Grid>
                        <Grid item xs={11}>
                          <Typography fontSize={16} fontWeight="600">
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
        </Box>
      </Grid>

      <Grid container justifyContent="center" mt={8}>
        <Button
          variant="custom"
          onClick={scrollTo}
          sx={{ padding: '8px 68px', textTransform: 'uppercase' }}
        >
          Zapytaj o ofertę{' '}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PerformanceBenefitsTwoComponent;
