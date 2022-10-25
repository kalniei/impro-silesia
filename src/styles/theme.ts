import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Colors from '../../helpers/Colors';

// Create a theme instance.

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    basic: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    basic?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    basic: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}

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
    },
    neutral: {
      main: Colors.white,
      contrastText: Colors.black
    },
    basic: {
      main: Colors.mainOrange,
      contrastText: Colors.white
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
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            fontWeight: 900,
            backgroundColor: Colors.lightOrange,
            color: Colors.white,
            fontSize: 20,
            textTransform: 'none',
            borderRadius: 10,
            padding: '8px 24px',
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
            transition: 'all 1s',
            ':hover': {
              backgroundColor: Colors.lightOrange,
              filter: 'brightness(90%)',
              boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'}
          },
        },
      ],
    },
  },
});

export default theme;
