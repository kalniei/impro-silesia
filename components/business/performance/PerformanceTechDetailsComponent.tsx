import { Grid, Box, Typography, Button, Card, CardContent } from '@mui/material';
import Colors from '../../../helpers/Colors';
import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';

interface PageProps {
  scrollTo: () => void;
}

const useStyles = makeStyles({
  cardBox: {
    border: `2px solid ${Colors.lightOrange}`,
    borderBottomWidth: '8px',
    borderRadius: '20px'
  },
  typoOne: {
    color: Colors.grey,
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  typoTwo: {
    color: Colors.mainOrange,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 900,
    marginTop: '16px'
  },
  typoThree: {
    fontSize: 15
  }
});

const PerformanceTechDetailsComponent = ({ scrollTo }: PageProps): JSX.Element => {
  const classes = useStyles();

  const goToContact = () => {
    window.location.assign('https://improsilesia.pl/kontakt');
  };

  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Typography variant="h2" textAlign="center">
          <Box component="span" color={Colors.mainOrange}>
            PERSONALIZOWANY SPEKTAKL{' '}
          </Box>
          - IMPRO
        </Typography>
        <Typography variant="subtitle1">SZCZEGÓŁY TECHNICZNE </Typography>

        <Grid container justifyContent="center" mt={8}>
          <Grid item xs={12} sm={6} md={3} textAlign="center" sx={{ mt: { xs: 2, md: 0 } }} px={2}>
            <Card className={classes.cardBox}>
              <CardContent>
                <Image src={`/img/icons/clock.png`} width="46px" height="46px" alt="impro clock" />
                <Typography className={classes.typoOne}>Czas trwania</Typography>
                <Typography className={classes.typoTwo}>30'- 90'</Typography>
                <Typography className={classes.typoThree}>najczęściej 1h</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} textAlign="center" sx={{ mt: { xs: 2, md: 0 } }} px={2}>
            <Card className={classes.cardBox}>
              <CardContent>
                <Image src={`/img/icons/team.png`} width="46px" height="46px" alt="impro team" />
                <Typography className={classes.typoOne}>WIELKOŚĆ GRUPY</Typography>
                <Typography className={classes.typoTwo}>1 - milion os.</Typography>
                <Typography className={classes.typoThree}>do ustalenia</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} textAlign="center" sx={{ mt: { xs: 2, md: 0 } }} px={2}>
            <Card className={classes.cardBox}>
              <CardContent>
                <Image
                  src={`/img/icons/location.png`}
                  width="46px"
                  height="46px"
                  alt="impro location"
                />
                <Typography className={classes.typoOne}>LOKALIZACJA</Typography>
                <Typography className={classes.typoTwo}>u nas / u was</Typography>
                <Typography className={classes.typoThree}>a nawet online</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} textAlign="center" sx={{ mt: { xs: 2, md: 0 } }} px={2}>
            <Card className={classes.cardBox}>
              <CardContent>
                <Image
                  src={`/img/icons/language.png`}
                  width="46px"
                  height="46px"
                  alt="impro language"
                />
                <Typography className={classes.typoOne}>Język</Typography>
                <Typography className={classes.typoTwo}>polski/angielski</Typography>
                <Typography className={classes.typoThree}>zagramy też w gibberishu</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container item xs={12} textAlign="center" sx={{ mt: { xs: 4, sm: 8 } }}>
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Button
              variant="custom"
              onClick={scrollTo}
              sx={{
                padding: '6px 36px',
                textTransform: 'uppercase',
                fontSize: '16px',
                marginRight: { xs: 0, sm: 4 }
              }}
            >
              Zapytaj o ofertę
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: { xs: 'center', sm: 'left' }, marginTop: { xs: 4, sm: 0 } }}
          >
            <Button
              variant="white"
              onClick={goToContact}
              sx={{ padding: '12px 24px', textTransform: 'uppercase', fontSize: '16px' }}
            >
              Skontaktuj się z nami
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default PerformanceTechDetailsComponent;
