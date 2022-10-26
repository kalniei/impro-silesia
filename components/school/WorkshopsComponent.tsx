import { Grid, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import getErrorMessage from '../../helpers/getErrorMessage';
import { request } from '../../helpers/restClient';
import useSnackbar from '../../snackbar/useSnackbar';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import SingleWorkshop from '../workshop/SingleWorkshop';

const WorkshopsComponent = (): JSX.Element => {
  const [workshopsArr, setWorkshopsArr] = useState<IBasicWorkshopObj[]>([]);
  const snackbar = useSnackbar();

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

  return (
    <Grid item xs={12} py={6} px={2}>
      {workshopsArr.length > 0 && (
        <Box className="maxWidth">
          <Typography variant="h1" textAlign="center">
            Warsztaty
          </Typography>
          {workshopsArr.map((item: IBasicWorkshopObj) => (
            <SingleWorkshop incomingWorkshops={item} />
          ))}
        </Box>
      )}
    </Grid>
  );
};

export default WorkshopsComponent;
