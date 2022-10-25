import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import getErrorMessage from '../../helpers/getErrorMessage';
import { request } from '../../helpers/restClient';
import useSnackbar from '../../snackbar/useSnackbar';
import { IBasicWorkshopObj } from '../../ts/interfaces';
import axios, { AxiosResponse, AxiosError } from 'axios';
import moment from 'moment-mini-ts';

const instance = axios.create();

const PaymentGeneral = (): JSX.Element => {
  const [workshopDetails, setWorkshopDetails] = useState<IBasicWorkshopObj | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [rodoCheck, setRodoCheck] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [sessionId, setSessionId] = useState<string>('');

  const router = useRouter();
  const snackbar = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const getPrice = (): number => {
    if (!workshopDetails) return 0;
    if (!workshopDetails.price_date || !workshopDetails.price_sale)
      return workshopDetails.price_normal;

    const saleDate = moment(workshopDetails?.price_date, 'DD/MM/YYYY');

    return !moment().isAfter(saleDate, 'day')
      ? workshopDetails.price_sale
      : workshopDetails.price_normal;
  };

  const generateSessionId = (): string => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const generateSign = async (formData: any) => {
    try {
      const { data } = await request('post', '/sha384Code', {
        sessionId: sessionId,
        merchantId: Number(process.env.NEXT_PUBLIC_MERCHANT_ID),
        amount: Number(getPrice() + '00'),
        currency: 'PLN',
        crc: process.env.NEXT_PUBLIC_CRC_KEY
      });

      startRegistartion(formData, data);
    } catch (error: any) {
      snackbar.showMessage(
        getErrorMessage(error, 'Coś poszło nie tak z wygenerowaniem znaku'),
        'error'
      );
      return;
    }
  };

  const startRegistartion = async (data: any, sign: string) => {
    const basicAuth =
      'Basic ' +
      Buffer.from(
        process.env.NEXT_PUBLIC_MERCHANT_ID + ':' + '546850019766733902dd563fb07fafde'
      ).toString('base64');

    const tempObj = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      posId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      sessionId: sessionId,
      amount: getPrice() + '00',
      currency: 'PLN',
      description: workshopDetails?.name,
      transferLabel: workshopDetails?.name,
      email: data?.email,
      client: data?.name_surname,
      regulationAccept: true,
      country: 'PL',
      language: 'pl',
      urlStatus: process.env.NEXT_PUBLIC_API_URL + '/transactionVerification',
      urlReturn: 'http://localhost:3000/payment/confirmation',
      sign: sign
    };

    instance
      .post(process.env.NEXT_PUBLIC_PAYMENT_API + '/api/v1/transaction/register', tempObj, {
        headers: { Authorization: basicAuth }
      })
      .then(({ data: response }: AxiosResponse) => {
        const link = process.env.NEXT_PUBLIC_PAYMENT_API + `/trnRequest/${response.data.token}`;
        window.location.replace(link);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

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

  const onSubmit = (data: any) => {
    if (!rodoCheck) {
      snackbar.showMessage('Zaznacz że przeczytałeś regulamin!', 'error');
      return;
    }
    setIsLoading(true);
    generateSign(data);
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

  useEffect(() => {
    setSessionId(generateSessionId());
  }, []);

  return (
    <Grid container justifyContent="center" m={2}>
      {workshopDetails && (
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Typography variant="h2" mb={2}>
              Witamy w naszym systemie płatnośći!
            </Typography>

            <Typography mb={2}>
              Żeby rozpociąć płatność za <b>{workshopDetails?.name}</b> w rozmiarze{' '}
              <b>{getPrice()} zł</b>, wprowadź niezbędne informacje i przeczytaj regulamin.
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
