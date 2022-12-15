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
import { useState } from 'react';
import useSnackbar from '../../snackbar/useSnackbar';
import { Controller, useForm } from 'react-hook-form';
import { request } from '../../helpers/restClient';
import getErrorMessage from '../../helpers/getErrorMessage';
import { Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material/';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../helpers/Colors';

interface IContactObj {
  date: string | Date;
  mail: string;
  notes: string;
  phone: string;
}

const defaultValues: IContactObj = {
  mail: '',
  phone: '',
  notes: '',
  date: new Date()
};

const useStyles = makeStyles((theme) => ({}));

const ContactForm = (): JSX.Element => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
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

  const sendForm = async (formData: IContactObj) => {
    setIsProcessing(true);
    try {
      const { data } = await request('post', '/sendEmail', {
        to: 'biuro@improsilesia.pl',
        subject: 'Zgłoszenie kontaktowe',
        content: `
        <div style="max-width: 560px; margin: 0 auto;">
            <br>
            Email: <b>${formData?.mail}</b>
            <br><br>
            Telefon: <b>${formData?.phone}</b>
            <br><br>
            Zapytanie: <b>${formData?.notes}</b>
            <br><br>
            Data Zgloszenia: <b>${formData?.date}</b>
            <br>
          </div>
        `
      });
      snackbar.showMessage('Dziękujemy za zapytanie, wkrótce się odezwiemy!', 'success');
      setIsProcessing(false);

      reset();
    } catch (error: any) {
      snackbar.showMessage(
        getErrorMessage(error, 'Coś poszło nie tak podczas wysłania zapytania, zadzwoń so nas.'),
        'error'
      );
      setIsProcessing(false);
      return;
    }
  };

  const onSubmit = (data: any) => {
    if (!regulationCheck) {
      snackbar.showMessage('Zaznacz wszystkie zgody!', 'error');
      return;
    }
    sendForm(data);
  };

  return (
    <Grid
      container
      sx={{
        py: 3,
        maxWidth: 600
      }}
    >
      <form autoComplete="off">
        <Grid container spacing={2} justifyContent="space-between" alignItems="flex-end">
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
                        <EmailIcon sx={{ color: Colors.mainOrange }} />
                      </InputAdornment>
                    )
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
                        <PhoneIcon sx={{ color: Colors.mainOrange }} />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} mt={1}>
            <Controller
              control={control}
              name="notes"
              rules={{
                required: { value: true, message: 'Wymagany' }
              }}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  focused
                  {...field}
                  multiline
                  error={!!errors?.notes}
                  helperText={errors?.notes?.message}
                  required
                  rows={3}
                  maxRows={Infinity}
                  placeholder="Jak możemy Ci pomóc?"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={regulationCheck}
                  onChange={() => {
                    setRegulationCheck(!regulationCheck);
                  }}
                />
              }
              label={
                <Typography variant="subtitle2" fontSize={10}>
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
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12} my={2}>
        <Button
          variant="custom"
          onClick={handleSubmit(onSubmit)}
          disabled={isProcessing}
          sx={{ width: '100%', textTransform: 'uppercase' }}
        >
          {isProcessing ? <CircularProgress /> : 'Wyślij zapytanie'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
