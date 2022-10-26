import {
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummaryProps
} from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import getErrorMessage from '../../helpers/getErrorMessage';
import { request } from '../../helpers/restClient';
import useSnackbar from '../../snackbar/useSnackbar';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import WorkshopDetails from './WorkshopDetails';
import BasicWorkshopForm from './BasicWorkshopForm';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

interface PageProps {
  incomingWorkshops?: IBasicWorkshopObj;
}

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropUpIcon color="primary" fontSize="large" />}
    {...props}
  />
))(() => ({
  justifyContent: 'left',
  '& .MuiAccordionSummary-content': {
    flexGrow: 0
  }
}));

const SingleWorkshop = ({ incomingWorkshops }: PageProps): JSX.Element => {
  const [workshopDetails, setWorkshopDetails] = useState<IBasicWorkshopObj | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(true);

  const router = useRouter();
  const snackbar = useSnackbar();

  const setUpWorkshopDetails = (data: any) => {
    if (!data) return;
    setWorkshopDetails({
      ...data,
      workshop_dates: JSON.parse(data?.workshop_dates),
      additional_info: JSON.parse(data?.additional_info)
    });
  };

  const getWorkshopDetails = async (id: string) => {
    try {
      const { data } = await request('post', '/getBasicWorkshopById', { path: id });
      setUpWorkshopDetails(data?.length ? data[0] : null);
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
    } else if (incomingWorkshops) {
      setUpWorkshopDetails(incomingWorkshops);
      setExpanded(false);
    } else {
      snackbar.showMessage('W naszej bazie nie istneje takich warsztatów', 'error');
      setIsError(true);
    }
  }, [router.isReady]);

  return (
    <Grid container justifyContent="center" p={2}>
      {workshopDetails && (
        <Grid container item xs={12}>
          <Accordion
            className="maxWidth"
            expanded={expanded}
            onChange={() => {
              if (router?.query?.id) return;
              setExpanded(!expanded);
            }}
          >
            <AccordionSummary>
              <Grid container item>
                <Typography variant="h2" component="span">
                  {workshopDetails.name} -
                </Typography>
                <Typography variant="h2" component="span" fontWeight="400" pl={1}>
                  {workshopDetails.day_of_week}
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <WorkshopDetails workshopDetails={workshopDetails} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <BasicWorkshopForm workshopDetails={workshopDetails} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      )}
      {isError && <Typography>Niestety takich warsztatów nie ma w naszej ofercie</Typography>}
    </Grid>
  );
};

export default SingleWorkshop;
