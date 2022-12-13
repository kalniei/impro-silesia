import { Grid, Box, Typography, Button, Card, CardContent } from '@mui/material';
import Colors from '../../../helpers/Colors';
import makeStyles from '@mui/styles/makeStyles';

interface PageProps {
  scrollTo: () => void;
}

const useStyles = makeStyles({
  clickableImage: {
    cursor: 'pointer',
    transition: '0.3s',
    maxWidth: '100%',
    display: 'block',
    margin: '0 auto',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
});

const IntegrationMethodComponent = ({ scrollTo }: PageProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h1" textAlign="center" mb={4}>
          Impro - metoda polecana{' '}
          <Box component="span" color={Colors.mainOrange}>
            przez najlepszych
          </Box>
        </Typography>

        <Card>
          <CardContent sx={{ p: { xs: 2, sm: 2, md: 4 } }}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <img className={classes.clickableImage} src={`/img/info/forbes.jpg`} alt="" />
                <Typography
                  color={Colors.mainOrange}
                  fontSize={13}
                  fontWeight={600}
                  textAlign="right"
                  sx={{ cursor: 'pointer' }}
                >
                  czytaj...
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} textAlign="center">
                <img src={`/img/info/stanford.jpg`} alt="" className={classes.clickableImage} />
                <Typography
                  color={Colors.mainOrange}
                  fontSize={13}
                  fontWeight={600}
                  textAlign="right"
                  sx={{ cursor: 'pointer' }}
                >
                  czytaj...
                </Typography>
              </Grid>
              <Grid item xs={12} mt={4}>
                <img src={`/img/info/cnnbusiness.jpg`} alt="" className={classes.clickableImage} />
                <Typography
                  color={Colors.mainOrange}
                  fontSize={13}
                  fontWeight={600}
                  textAlign="right"
                  sx={{ cursor: 'pointer' }}
                >
                  czytaj...
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container justifyContent="center" mt={8}>
          {/* <Button component={Link} href="/" variant="outlined"> */}

          <Button
            variant="custom"
            onClick={scrollTo}
            sx={{ padding: '8px 26px', textTransform: 'uppercase' }}
          >
            Zapytaj o ofertę
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default IntegrationMethodComponent;
