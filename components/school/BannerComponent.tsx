import { Grid, Box, Typography, Button, Card, CardContent, ListItem, List } from '@mui/material';
import Colors from '../../helpers/Colors';

interface PageProps {
  scrollToWorkshops: () => void;
  scrollToBottom: () => void;
}

const BannerComponent = ({ scrollToWorkshops, scrollToBottom }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} sx={{ backgroundColor: Colors.black, position: 'relative' }}>
      <img
        src="/img/schoolMain.jpg"
        alt=""
        style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <Grid container className="maxWidth" sx={{ pl: { xs: 4, sm: 6, md: 8 } }}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              color={Colors.mainOrange}
              sx={{ fontSize: { xs: 26, sm: 38, md: 50, lg: 60 } }}
            >
              Szkoła Impro Silesia
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              color={Colors.white}
              sx={{ fontSize: { xs: 21.5, sm: 31.5, md: 41, lg: 49 } }}
            >
              Warsztaty Improwizacji
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
            <Typography
              variant="h2"
              textTransform="none"
              fontWeight="500"
              color={Colors.white}
              sx={{ fontSize: { xs: 16, sm: 20, md: 26, lg: 30 } }}
            >
              Techniki teatru impro <br /> w życiu biznesie i na scenie!
            </Typography>
          </Grid>

          <Grid container sx={{ mt: { xs: 2, sm: 4, md: 8, lg: 16 } }}>
            <Grid item mr={6}>
              <Button
                variant="custom"
                onClick={scrollToWorkshops}
                sx={{
                  textTransform: 'uppercase',
                  lineHeight: '1',
                  fontSize: { xs: 18 },
                  width: 240,
                  p: '12px'
                }}
              >
                Zapisz się
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="white"
                onClick={scrollToBottom}
                sx={{
                  width: 240,
                  fontSize: 18,
                  p: '12px',
                  display: { xs: 'none', sm: 'inline-flex' }
                }}
              >
                Dowiedz się więcej
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default BannerComponent;
