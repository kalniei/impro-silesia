import { Grid, Box, Typography, Button } from '@mui/material';
import Colors from '../../../helpers/Colors';
import { ILongInformationObj } from '../../../ts/interfaces';
import LongInfoComponent from '../../common/LongInfoComponent';

interface PageProps {
  scrollTo: () => void;
}

const longInformationObj: ILongInformationObj = {
  title: null,
  imgName: 'performance2.jpg',
  textHtml: `<b>Kolektyw Impro Silesia</b> to teatr improwizacji zrzeszający najlepszych improwizatorów Impro Silesia.
  Każdy spektakl jest unikalny, tworzony na żywo w oparciu o sugestie publiczności.
  <br />
  <br />
  Członkowie Kolektywu IS to improwizatorzy, zawodowi aktorzy i muzycy, absolwenci Szkoły Impro Silesia, a swoje umiejętności szlifowali z najlepszymi instruktorami z Polski, Europy, Kanady i USA.
  <br />
  <br />
  Występują m.in. na deskach Teatru Śląskiego im.St. Wyspiańskiego w Katowicach, Teatru Korez, Teatru Rozrywki.`,
  buttonText: null
};

const PerformanceInformationComponentTwo = ({ scrollTo }: PageProps): JSX.Element => {
  return (
    <>
      <Grid item xs={12} py={6} px={2}>
        <Typography variant="h2" textAlign="center">
          <Box component="span" color={Colors.mainOrange}>
            Kim jesteśmy,{' '}
          </Box>
          żeby was bawić
        </Typography>

        <Typography variant="subtitle1">
          POZNAJMY SIĘ - TEATR IMPROWIZACJI - KOLEKTYW IMPRO SILESIA
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        py={6}
        mb={2}
        sx={{
          backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`
        }}
      >
        <Box className="maxWidth">
          <LongInfoComponent
            infoObj={longInformationObj}
            scrollTo={() => {
              return;
            }}
          />
        </Box>
      </Grid>
    </>
  );
};

export default PerformanceInformationComponentTwo;
