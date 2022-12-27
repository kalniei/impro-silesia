import { Grid, Box, Typography } from '@mui/material';
import Colors from '../../../helpers/Colors';
import { ILongInformationObj } from '../../../ts/interfaces';
import LongInfoComponent from '../../common/LongInfoComponent';

interface PageProps {
  scrollTo: () => void;
}

const longInformationObj: ILongInformationObj = {
  title: 'OTWARTA SCENA IMPROWIZACJI',
  imgName: 'performance3.jpg',
  textHtml: `Chcecie sami spróbować? Kasia z marketingu i Adam Back-end Developer na jednej scenie!
  <br />
  <br />
  <span style="color: #f39000; font-weight: 600">PRZEKONACIE SIĘ, ŻE WŚRÓD WAS SĄ SCENICZNE BESTIE!</span>
  <br />
  <br />
  Zadbamy o Was, pokażemy co i jak i poprowadzimy całe wydarzenie. Każdy z Was będzie mógł, ale nie będzie musiał wystąpić.
  <br />
  <br />
  Otwarta Scena to genialne <span style="color: #f39000; font-weight: 600">dopełnienie warsztatów!</span>`,
  buttonText: 'Zapytaj o ofertę'
};

const PerformanceInformationComponentThree = ({ scrollTo }: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Typography variant="h2" textAlign="center">
        <Box component="span" color={Colors.mainOrange}>
          Dopasujemy się{' '}
        </Box>
        do twoich potrzeb
      </Typography>

      <Typography variant="subtitle1" mb={4}>
        zobacz co jeszcze dla Ciebie mamy
      </Typography>
      <Box className="maxWidth">
        <LongInfoComponent infoObj={longInformationObj} scrollTo={scrollTo} />
      </Box>
    </Grid>
  );
};

export default PerformanceInformationComponentThree;
