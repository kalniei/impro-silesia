import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { textAlign } from '@mui/system';
import Colors from '../../helpers/Colors';
import ContactForm from './ContactForm';

const ContactMain = (): JSX.Element => {
  return (
    <Grid container justifyContent="center" mt={6}>
      <Grid item xs={12} className="maxWidth">
        <Card>
          <Grid container>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                fontSize: 0,
                position: 'relative',
                backgroundColor: Colors.black,
                textAlign: 'center'
              }}
            >
              <img
                src={`/img/contact/szymon.jpg`}
                alt=""
                style={{ maxWidth: '100%', maxHeight: '511px' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '12%',
                  left: { xs: '14%', sm: '30%', md: '8%' },
                  textAlign: 'left'
                }}
              >
                <Typography color={Colors.mainOrange} fontSize={22} fontWeight={600}>
                  Szymon Paszek
                </Typography>
                <Typography color={Colors.white} fontSize={22} fontWeight={600}>
                  <a href="tel:502059434">502 059 434</a>
                </Typography>
                <Typography color={Colors.white} fontSize={18} fontWeight={600}>
                  <a href="mailto:szymonpaszek@improsilesia.pl">szymonpaszek@improsilesia.pl</a>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} p={8}>
              <Typography variant="h1" textAlign="center" mb={1}>
                <Box component="span" color={Colors.lightOrange}>
                  Skontaktuj się{' '}
                </Box>
                - pomożemy
              </Typography>
              <ContactForm />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ContactMain;
