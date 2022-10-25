import { CardContent, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import getErrorMessage from '../../helpers/getErrorMessage';
import { request } from '../../helpers/restClient';
import useSnackbar from '../../snackbar/useSnackbar';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import { Card } from '@mui/material';
import WorkshopDetails from './WorkshopDetails';
import BasicWorkshopForm from './BasicWorkshopForm';

const SingleWorkshop = (): JSX.Element => {
  const [workshopDetails, setWorkshopDetails] = useState<IBasicWorkshopObj | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const router = useRouter();
  const snackbar = useSnackbar();

  const getWorkshopDetails = async (id: string) => {
    try {
      const { data } = await request('post', '/getBasicWorkshopById', { path: id });
      setWorkshopDetails(
        data?.length && {
          ...data[0],
          workshop_dates: JSON.parse(data[0]?.workshop_dates),
          additional_info: JSON.parse(data[0]?.additional_info)
        }
      );
    } catch (error: any) {
      snackbar.showMessage(
        getErrorMessage(error, 'W naszej bazie nie istneje takich warsztatów'),
        'error'
      );
      setIsError(true);
      return;
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query?.id) {
      getWorkshopDetails(router.query.id as string);
    } else {
      snackbar.showMessage('Coś poszło nie tak z realizowaniem płatnośći', 'error');
      setIsError(true);
    }
  }, [router.isReady]);

  return (
    <Grid container justifyContent="center" m={2}>
      {workshopDetails && (
        <Card sx={{ width: '80%' }}>
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <WorkshopDetails workshopDetails={workshopDetails} />
              </Grid>
              <Grid item xs={6}>
                <BasicWorkshopForm workshopDetails={workshopDetails} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      {isError && <Typography>Niestety takich warsztatów nie ma w naszej ofercie</Typography>}
    </Grid>
  );
};

export default SingleWorkshop;
