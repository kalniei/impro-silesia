import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import getErrorMessage from '../../helpers/getErrorMessage';
import { request } from '../../helpers/restClient';
import useSnackbar from '../../snackbar/useSnackbar';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import { createPaymentLink, getPrice } from '../../helpers/createPaymentLink';

const PaymentGeneral = (): JSX.Element => {
  const [workshopDetails, setWorkshopDetails] = useState<IBasicWorkshopObj | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [rodoCheck, setRodoCheck] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const snackbar = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const getWorkshopDetails = async (id: string) => {
    try {
      const { data } = await request('post', '/getBasicWorkshopById', { path: id });
      setWorkshopDetails(data?.length && data[0]);
    } catch (error: any) {
      snackbar.showMessage(
        getErrorMessage(error, 'W naszej bazie nie istneje takich warsztatów'),
        'error'
      );
      return;
    }
  };

  const redirectToPayment = async (formData: { email: string; name_surname: string }) => {
    if (!workshopDetails) return;
    try {
      const generatedLink = await createPaymentLink(formData, workshopDetails);
      window.location.replace(generatedLink);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      snackbar.showMessage('Coś poszło nie tak z realizacją płatności', 'error');
    }
  };

  const onSubmit = (data: any) => {
    if (!rodoCheck) {
      snackbar.showMessage('Zaznacz że przeczytałeś regulamin!', 'error');
      return;
    }
    setIsLoading(true);
    redirectToPayment(data);
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
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Typography variant="h3" mb={2}>
              Witamy w naszym systemie płatnośći!
            </Typography>

            <Typography mb={2}>
              Żeby rozpociąć płatność za <b>{workshopDetails?.name}</b> w rozmiarze{' '}
              <b>{getPrice(workshopDetails)} zł</b>, wprowadź niezbędne informacje i przeczytaj
              regulamin.
            </Typography>
          </Grid>
          <Grid item xs={6} pl={2}>
            <form autoComplete="off">
              <TextField
                label="Wpisz swój swoje imię i nazwisko"
                placeholder="Imię i nazwisko"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                fullWidth
                type="text"
                defaultValue=""
                {...register('name_surname', {
                  required: {
                    value: true,
                    message: 'To pole wymagane'
                  }
                })}
                error={errors.name_surname ? true : false}
                helperText={errors.name_surname ? errors.name_surname.message : ''}
              />

              <TextField
                label="Wpisz swój adres email"
                placeholder="Email"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                fullWidth
                type="text"
                defaultValue=""
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email jest wymagany'
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Invalid e-mail.'
                  }
                })}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : ''}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={rodoCheck}
                    onChange={() => {
                      setRodoCheck(!rodoCheck);
                    }}
                    color="primary"
                  />
                }
                label={
                  <p>
                    Oświadczam, że zapoznałem się z{' '}
                    <a href="https://www.przelewy24.pl/regulamin" target="blank">
                      regulaminem
                    </a>{' '}
                    i{' '}
                    <a
                      href="https://www.przelewy24.pl/obowiazek-informacyjny-platnik"
                      target="blank"
                    >
                      {' '}
                      obowiązkiem informacyjnym{' '}
                    </a>
                    serwisu Przelewy24
                  </p>
                }
              />
            </form>
          </Grid>
          <Grid item xs={9} pl={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading || !rodoCheck}
            >
              Zapłać
            </Button>
          </Grid>
        </Grid>
      )}
      {isError && (
        <Typography>
          Coś poszło nie tak z realizowaniem płatnośći, skontaktuj sie z nami lub zapłać:
        </Typography>
      )}
    </Grid>
  );
};

export default PaymentGeneral;
