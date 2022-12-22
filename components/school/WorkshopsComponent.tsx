import { Grid, Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import getErrorMessage from '../../helpers/getErrorMessage';
import { request } from '../../helpers/restClient';
import useSnackbar from '../../snackbar/useSnackbar';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import SingleWorkshop from '../workshop/SingleWorkshop';

interface PageProps {
  setMyRef: (ref: any) => void;
}

const WorkshopsComponent = ({ setMyRef }: PageProps): JSX.Element => {
  const [workshopsArr, setWorkshopsArr] = useState<IBasicWorkshopObj[]>([]);
  const snackbar = useSnackbar();
  const myRef = useRef<HTMLImageElement>(null);

  const getWorkshopsArr = async () => {
    try {
      const { data } = await request('get', '/getBasicWorkshops');
      setWorkshopsArr(data);
    } catch (error: any) {
      snackbar.showMessage(
        getErrorMessage(error, 'Coś poszło nie tak z pobieraniem dostępnych warsztatów'),
        'error'
      );
      return;
    }
  };

  useEffect(() => {
    getWorkshopsArr();
  }, []);

  useEffect(() => {
    if (!myRef) return;
    setMyRef(myRef);
  }, [myRef]);

  return (
    <Grid item xs={12} py={6} sx={{ px: { xs: 0, sm: 2 } }} ref={myRef}>
      {workshopsArr.length > 0 && (
        <Box className="maxWidth">
          <Typography variant="h2" textAlign="center">
            Warsztaty
          </Typography>
          {workshopsArr.map((item: IBasicWorkshopObj) => (
            <SingleWorkshop key={item.path} incomingWorkshops={item} />
          ))}
        </Box>
      )}
    </Grid>
  );
};

export default WorkshopsComponent;
