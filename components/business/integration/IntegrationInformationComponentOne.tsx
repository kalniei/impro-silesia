import { Grid, Box } from '@mui/material';
import Colors from '../../../helpers/Colors';
import { ILongInformationObj } from '../../../ts/interfaces';
import LongInfoComponent from '../../common/LongInfoComponent';

interface PageProps {
  scrollTo: () => void;
}

const longInformationObj: ILongInformationObj = {
  title: 'Warsztaty integracyjne - impro',
  imgName: 'integration1.jpg',
  textHtml: `Luźna atmosfera, pozytywna energia, współraca, humor oraz duża interaktywność  przy angażującym kontaktakcie z drugim człowiekiem w innym kontekście niż praca!
  <br />
  <br />
  <span style="color: #f39000; font-weight: 600">KOLEJNY PAINTBALL? KRĘGLE? WSZYSTKO JUŻ BYŁO?</span>
  <br />
  <br />
  Gwarantujemy, że Wasz zespół będzie się <b>świetnie bawił</b>, a przy tym wyciągnie <b>mądre wnioski</b> przekładające się na życie prywatne i biznesowe. <3`,
  buttonText: 'Zapytaj o ofertę'
};

const IntegrationInformationComponentOne = ({ scrollTo }: PageProps): JSX.Element => {
  return (
    <Grid
      item
      xs={12}
      py={6}
      px={2}
      sx={{
        backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`
      }}
    >
      <Box className="maxWidth">
        <LongInfoComponent infoObj={longInformationObj} scrollTo={scrollTo} />

        <Grid container mt={4}>
          <Grid item xs={12}>
            <img
              src={`/img/info/opinion1.jpg`}
              alt=""
              style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default IntegrationInformationComponentOne;
