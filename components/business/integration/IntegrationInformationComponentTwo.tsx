import { Grid, Box, Typography, Button } from '@mui/material';
import Colors from '../../../helpers/Colors';
import { ILongInformationObj } from '../../../ts/interfaces';
import LongInfoComponent from '../../common/LongInfoComponent';

interface PageProps {
  scrollTo: () => void;
}

const longInformationObj: ILongInformationObj = {
  title: null,
  imgName: 'integration2.jpg',
  textHtml: `Warsztaty to ćwiczenia i gry pochodzące z teatru improwizacji, w parach, grupie, w kole, które same w sobie są doskonałą zabawą, ale wnioski, z nich wyciągnięte dotyczą mechanizmów psychologicznych, które bezpośrednio przekładają się na życie prywatne i biznesowe.
  <br />
  <br />
  <span style="color: #f39000; font-weight: 900">•</span>
  to 100% praktyki
  <br />
    <span style="color: #f39000; font-weight: 900">•</span>
 mnóstwo śmiechu i pozytywnej energii
  <br />
    <span style="color: #f39000; font-weight: 900">•</span>
 elastyczność w stosunku do potrzeb grupy i uczestników
  <br />
    <span style="color: #f39000; font-weight: 900">•</span>
 doświadczenie, które zostanie z Wami na długo
  <br />
    <span style="color: #f39000; font-weight: 900">•</span>
 prawdopodobnie najlepsza integracja w życiu Waszego zespołu`,
  buttonText: null
};

const IntegrationInformationComponentTwo = ({ scrollTo }: PageProps): JSX.Element => {
  return (
    <>
      <Grid item xs={12} py={6} px={2}>
        <Box className="maxWidth">
          <Typography variant="h1" textAlign="center" mb={4}>
            <Box component="span" color={Colors.mainOrange}>
              Jak wygldają{' '}
            </Box>
            warsztaty improwizacji
          </Typography>

          <LongInfoComponent
            infoObj={longInformationObj}
            scrollTo={() => {
              return;
            }}
          />

          <Grid container mt={6}>
            <Grid item xs={12}>
              <Typography variant="h4" textAlign="center" mb={1}>
                WARSZTATY SĄ{' '}
                <Box component="span" color={Colors.mainOrange}>
                  DLA KAŻDEGO{' '}
                </Box>
                - NIE TYLKO DLA EKSTRAWERTYKÓW{' '}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color={Colors.grey}
                textAlign="center"
                mb={3}
                fontSize={16}
                fontWeight={600}
              >
                NIE WYMAGAJĄ, ŻADNEGO DOŚWIADCZENIA SCENICZNEGO
              </Typography>
            </Grid>

            <Grid item xs={12} textAlign="center">
              <iframe
                width="329"
                height="584"
                src="https://www.youtube.com/embed/k3NBIu-ggy4"
                title="warsztaty impro - integracja - opinia Dieboldnixdorf.com(2)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button
                variant="custom"
                onClick={scrollTo}
                sx={{ padding: '6px 24px', textTransform: 'uppercase', mt: 4 }}
              >
                Zapytaj o ofertę
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        py={6}
        sx={{
          backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`
        }}
      >
        <Grid item xs={10} sm={6}>
          <Typography variant="body1" fontWeight={500}>
            Te konkretne warsztaty są skupione na integracjii, zabawie i pozytywnej energii -
            potrzebujesz większego przełożenia na biznes?
          </Typography>
        </Grid>
        <Grid container item xs={12} textAlign="center" mt={3}>
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Button
              variant="custom"
              onClick={scrollTo}
              sx={{
                padding: '6px 24px',
                textTransform: 'uppercase',
                fontSize: '16px',
                marginRight: { xs: 0, sm: 4 }
              }}
            >
              Skontaktuj się z nami
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
              onClick={scrollTo}
              sx={{ padding: '12px 24px', textTransform: 'uppercase', fontSize: '16px' }}
            >
              Sprawdź inne szkolenia
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default IntegrationInformationComponentTwo;
