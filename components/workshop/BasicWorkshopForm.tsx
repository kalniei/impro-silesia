import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { IBasicWorkshopObj, IUserObj } from '../../ts/interfaces';
import Colors from '../../helpers/Colors';
import { useEffect, useState } from 'react';
import useSnackbar from '../../snackbar/useSnackbar';
import { Controller, useForm } from 'react-hook-form';
import { request } from '../../helpers/restClient';
import getErrorMessage from '../../helpers/getErrorMessage';
import { TLevelTypes } from '../../ts/types';
import {
  InsertEmoticon as InsertEmoticonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  TipsAndUpdates as TipsAndUpdatesIcon
} from '@mui/icons-material/';
import { createPaymentLink } from '../../helpers/createPaymentLink';
import { makeStyles } from '@material-ui/core/styles';

interface PageProps {
  workshopDetails: IBasicWorkshopObj;
}

const defaultValues: IUserObj = {
  name: '',
  surname: '',
  mail: '',
  phone: '',
  notes: '',
  level: '0',
  paid: '0',
  date: new Date()
};

const useStyles = makeStyles((theme) => ({
  textField: {
    borderBottomColor: Colors.mainNatural
  },
  input: {
    color: Colors.mainNatural
  },
  checkBox: {
    color: Colors.mainNatural,
    '&.Mui-checked': {
      color: Colors.mainNatural
    }
  }
}));

const BasicWorkshopForm = ({ workshopDetails }: PageProps): JSX.Element => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [rodoCheck, setRodoCheck] = useState<boolean>(false);
  const [paymentCheck, setPaymentCheck] = useState<boolean>(false);
  const [regulationCheck, setRegulationCheck] = useState<boolean>(false);

  const snackbar = useSnackbar();

  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: defaultValues
  });

  const signUpAndPay = async (formData: IUserObj) => {
    if (!workshopDetails?.db_table_name) return;
    setIsProcessing(true);
    try {
      const { data } = await request('post', '/addNewUserToTable', {
        table_name: workshopDetails?.db_table_name,
        data_object: formData
      });
      snackbar.showMessage(
        'Udało Ci się zapisac na warsztaty. Za chwilę zostaniesz przekierowany na strone płatności!',
        'success'
      );

      redirectToPayment(formData);
    } catch (error: any) {
      snackbar.showMessage(
        getErrorMessage(error, 'Coś poszło nie tak podczas zapisywania się na warsztaty'),
        'error'
      );
      setIsProcessing(false);
      return;
    }
  };

  const onSubmit = (data: any) => {
    if (!rodoCheck || !regulationCheck || !paymentCheck) {
      snackbar.showMessage('Zaznacz wszystkie zgody!', 'error');
      return;
    }
    signUpAndPay(data);
  };

  useEffect(() => {
    if (!workshopDetails) return;
    reset({
      ...defaultValues,
      level: (Number(workshopDetails.level) - 1).toString() as TLevelTypes
    });
  }, [workshopDetails]);

  const redirectToPayment = async (formData: IUserObj) => {
    try {
      const generatedLink = await createPaymentLink(
        {
          email: formData.mail,
          name_surname: `${formData.name} ${formData.surname}`
        },
        workshopDetails
      );
      window.location.replace(generatedLink);
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
      snackbar.showMessage('Coś poszło nie tak z realizacją płatności', 'error');
    }
  };
  return (
    <Grid
      container
      sx={{
        backgroundColor: Colors.lightBlack,
        p: 3,
        borderRadius: 8
      }}
    >
      <form autoComplete="off">
        <Grid container spacing={2} justifyContent="space-between" alignItems="flex-end">
          <Grid item xs={12} md={6} mt={1}>
            <Controller
              control={control}
              name="name"
              rules={{
                required: { value: true, message: 'Wymagany' }
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  color="neutral"
                  focused
                  {...field}
                  placeholder="Imię"
                  fullWidth
                  required
                  error={!!errors?.name}
                  helperText={errors?.name?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InsertEmoticonIcon sx={{ color: Colors.mainNatural }} />
                      </InputAdornment>
                    ),
                    className: classes.input
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={1}>
            <Controller
              control={control}
              name="surname"
              rules={{
                required: { value: true, message: 'Wymagany' }
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  color="neutral"
                  focused
                  {...field}
                  placeholder="Nazwisko"
                  fullWidth
                  error={!!errors?.surname}
                  helperText={errors?.surname?.message}
                  name="surname"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InsertEmoticonIcon sx={{ color: Colors.mainNatural }} />
                      </InputAdornment>
                    ),
                    className: classes.input
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={1}>
            <Controller
              control={control}
              name="mail"
              rules={{
                required: {
                  value: true,
                  message: 'Email jest wymagany'
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Niepoprawny e-mail.'
                }
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  color="neutral"
                  focused
                  {...field}
                  placeholder="E-mail"
                  fullWidth
                  error={!!errors?.mail}
                  helperText={errors?.mail?.message}
                  name="email"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: Colors.mainNatural }} />
                      </InputAdornment>
                    ),
                    className: classes.input
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={1}>
            <Controller
              control={control}
              name="phone"
              rules={{
                required: { value: true, message: 'Wymagany' }
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  color="neutral"
                  focused
                  {...field}
                  placeholder="Telefon"
                  error={!!errors?.phone}
                  helperText={errors?.phone?.message}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: Colors.mainNatural }} />
                      </InputAdornment>
                    ),
                    className: classes.input
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} mt={1}>
            <Controller
              control={control}
              name="notes"
              render={({ field }) => (
                <TextField
                  variant="standard"
                  color="neutral"
                  focused
                  {...field}
                  placeholder="Chcesz coś dodać?"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TipsAndUpdatesIcon sx={{ color: Colors.mainNatural }} />
                      </InputAdornment>
                    ),
                    className: classes.input
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rodoCheck}
                  onChange={() => {
                    setRodoCheck(!rodoCheck);
                  }}
                  className={classes.checkBox}
                />
              }
              label={
                <Typography variant="subtitle2" color={Colors.mainNatural} fontSize={10}>
                  Wyrażam zgodę na przetwarzanie danych osobowych dla potrzeb niezbędnych do
                  przesyłania informacji związanych z warsztatami Impro Silesia*
                </Typography>
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={regulationCheck}
                  onChange={() => {
                    setRegulationCheck(!regulationCheck);
                  }}
                  className={classes.checkBox}
                />
              }
              label={
                <Typography variant="subtitle2" color={Colors.mainNatural} fontSize={10}>
                  Oświadczam, że zapoznałem się z{' '}
                  <a href="/rodo_informacja/" target="blank">
                    informacjami
                  </a>{' '}
                  i wyrażam zgodę na przetwarzanie danych osobowych oraz akceptuje{' '}
                  <a href="/regulamin/" target="blank">
                    {' '}
                    regulamin{' '}
                  </a>
                  Szkoły Impro Silesia*
                </Typography>
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={paymentCheck}
                  onChange={() => {
                    setPaymentCheck(!paymentCheck);
                  }}
                  className={classes.checkBox}
                />
              }
              label={
                <Typography variant="subtitle2" color={Colors.mainNatural} fontSize={10}>
                  Oświadczam, że zapoznałem się z{' '}
                  <a href="https://www.przelewy24.pl/regulamin" target="blank">
                    regulaminem
                  </a>{' '}
                  i{' '}
                  <a href="https://www.przelewy24.pl/obowiazek-informacyjny-platnik" target="blank">
                    {' '}
                    obowiązkiem informacyjnym{' '}
                  </a>
                  serwisu Przelewy24*
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12} my={2}>
        <Button
          variant="custom"
          onClick={handleSubmit(onSubmit)}
          disabled={isProcessing}
          sx={{ width: '100%' }}
        >
          {isProcessing ? <CircularProgress /> : 'Zapisuję się i płacę'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default BasicWorkshopForm;
