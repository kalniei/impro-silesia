import { Grid } from '@mui/material';
import ContactForm from './ContactForm';

const ContactMain = (): JSX.Element => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default ContactMain;
