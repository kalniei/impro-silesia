import { Grid, Box, Typography, Button, Card, CardContent } from '@mui/material';
import Colors from '../../../helpers/Colors';

interface PageProps {
  scrollTo: () => void;
}

const IntegrationPerformanceComponent = ({ scrollTo }: PageProps): JSX.Element => {
  const goToContact = () => {
    window.location.assign('https://improsilesia.pl/kontakt');
  };

  return (
    <Grid item xs={12} py={6}>
      <Grid
        container
        alignItems="center"
        sx={{
          backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`
        }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            container
            justifyContent="flex-end"
            sx={{ maxWidth: '650px', m: '0 0 0 auto;', px: 8, py: { xs: 4, md: 0 } }}
          >
            <Grid item xs={12}>
              <Typography
                color={Colors.white}
                fontWeight={900}
                sx={{ fontSize: { xs: 24, sm: 30, md: 32, lg: 40 } }}
              >
                A MOŻE PERSONALIZOWANY SPEKTAKL?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color={Colors.grey}
                sx={{ fontSize: { xs: 14, sm: 16, md: 16, lg: 18 } }}
                fontWeight={600}
              >
                RANO WARSZTATY, A WIECZOREM OTWARTA SCENA IMPRO LUB SPEKTKAL IMPRO TO ŚWIETNE
                EVENTOWE POŁĄCZENIE.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="white"
                onClick={scrollTo}
                sx={{
                  width: 240,
                  fontSize: { md: 16, lg: 18 },
                  p: '12px',
                  textAlign: 'right',
                  mt: { xs: 4, md: 4, lg: 8 }
                }}
              >
                Dowiedz się więcej
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            fontSize: 0,
            backgroundColor: Colors.black,
            textAlign: { xs: 'center', lg: 'left' }
          }}
        >
          <img src={`/img/info/moze-spektakl.jpg`} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IntegrationPerformanceComponent;
