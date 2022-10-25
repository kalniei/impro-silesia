import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Colors from '../../helpers/Colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.mainOrange
    },
    secondary: {
      main: Colors.darkGrey
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: 'Asap',
    fontSize: 14,
    h1: {
      color: Colors.black,
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '18px',
      padding: '16px 0'
    },
    h2: {
      color: Colors.black,
      fontSize: `22px`,
      fontWeight: 800,
      textTransform: 'uppercase',
      paddingBottom: 0
    },
    h3: {
      fontSize: '1.3em',
      fontWeight: 700
    },
    h4: {
      color: Colors.darkGrey,
      fontSize: `17px`,
      fontWeight: 700,
      textTransform: 'uppercase',
      paddingBottom: '16px'
    },
    h5: {
      fontWeight: 700,
      fontSize: '17px',
    },
    subtitle2: {
      color: Colors.grey,
      fontWeight: 600,
      fontSize: '14px',
    }
  }
});

export default theme;
