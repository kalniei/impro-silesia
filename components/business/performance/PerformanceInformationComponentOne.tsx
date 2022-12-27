import { Grid, Box } from '@mui/material';
import Colors from '../../../helpers/Colors';
import { ILongInformationObj } from '../../../ts/interfaces';
import LongInfoComponent from '../../common/LongInfoComponent';

interface PageProps {
  scrollTo: () => void;
}

const longInformationObj: ILongInformationObj = {
  title: 'PERSONALIZOWANY SPEKTAKL IMPRO',
  imgName: 'performance1.jpg',
  textHtml: `Ciekawostki z życia <b>Waszej firmy</b>, klimat Waszej <b>branży</b>, duża interaktywność i kreatywność naszego teatru impro to gwarancja udanego wieczoru
  <br />
  <br />
  <span style="color: #f39000; font-weight: 600">UNIKATOWY SPEKTAKL - ZAGRANY TYLKO RAZ - DLA WAS!</span>
  <br />
  <br />
  Komediowy, <b>dopasowany</b> do Waszego wydarzenia, całkowicie improwizowany, <b>profesjonalny</b> spektakl na podstawie Waszych sugestii.`,
  buttonText: 'Zapytaj o ofertę'
};

const PerformanceInformationComponentOne = ({ scrollTo }: PageProps): JSX.Element => {
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
      </Box>
    </Grid>
  );
};

export default PerformanceInformationComponentOne;
