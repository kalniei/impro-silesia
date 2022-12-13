import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import Colors from '../../helpers/Colors';
import { IInfoObj } from '../../ts/interfaces';

interface PageProps {
  infoArray: IInfoObj[];
}

const InfoElements = ({ infoArray }: PageProps): JSX.Element => {
  return (
    <Grid container>
      {infoArray.map((x: IInfoObj, key: number) => (
        <Grid
          key={key}
          container
          justifyContent="center"
          item
          md={4}
          sm={6}
          xs={12}
          sx={{ mt: { xs: 4, sm: 6, md: 8 } }}
        >
          <Grid item textAlign="center">
            <Image
              src={`/img/icons/${x.imgName}.png`}
              width="100px"
              height="100px"
              alt={x.imgName}
            />
            <Box
              sx={{
                color: Colors.black,
                fontSize: 19,
                fontWeight: 800,
                borderRadius: 3,
                width: '230px',
                height: '50px',
                textAlign: 'center',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-8px',
                lineHeight: '1',
                borderBottom: `4px solid ${Colors.mainOrange}`
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: x.text }} />
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoElements;
