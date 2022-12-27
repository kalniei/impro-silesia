import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Colors from '../../helpers/Colors';

// Create a theme instance.

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    basic: Palette['primary'];
    simpleWhite: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    basic?: PaletteOptions['primary'];
    simpleWhite?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    neutral: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    simpleWhite: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    neutral: true;
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
    black: true;
    white: true;
  }
}
let theme = createTheme()

theme = createTheme(theme ,{
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
      main: Colors.mainNatural,
      contrastText: Colors.black
    },
    basic: {
      main: Colors.mainOrange,
      contrastText: Colors.white
    },
    simpleWhite: {
      main: Colors.white,
      contrastText: Colors.black
    },
  },
  typography: {
    fontFamily: 'Asap',
    fontSize: 14,
    h1: {
      color: Colors.black,
      fontWeight: 800,
      fontSize: '26px',
      textTransform: 'uppercase',
      paddingBottom: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
    },
    h2: {
      color: Colors.black,
      fontWeight: 800,
      fontSize: '26px',
      textTransform: 'uppercase',
      paddingBottom: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
    },
    h3: {
      color: Colors.black,
      fontSize: `22px`,
      fontWeight: 800,
      textTransform: 'uppercase',
      paddingBottom: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: '20px',
      },
    },
    h4: {
      color: Colors.black,
      fontSize: `20px`,
      fontWeight: 700,
      textTransform: 'uppercase',
      paddingBottom: 0
    },
    h5: {
      fontWeight: 700,
      fontSize: '17px',
    },
    body1: {
      color: Colors.black,
      fontWeight: 400,
      fontSize: '18px',
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    subtitle1: {
      color: Colors.grey,
      fontWeight: 600,
      fontSize: '16px',
      marginBottom: 3,
      textAlign:"center",
      textTransform: 'uppercase'
    },
    subtitle2: {
      color: Colors.grey,
      fontWeight: 600,
      fontSize: '14px',
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 4px 9px -3px rgba(66, 68, 90, 1)'
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            fontWeight: 900,
            backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`,
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
              boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'},
            [theme.breakpoints.down('md')]: {
              fontSize: '16px',
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '14px',
            }, 
            },
        },
        {
          props: { variant: 'black' },
          style: {
            fontWeight: 900,
            backgroundColor: Colors.black,
            color: Colors.white,
            fontSize: 18,
            textTransform: 'uppercase',
            borderRadius: 10,
            padding: '12px 68px',
            lineHeight: 1,
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
            transition: 'all 1s',
            ':hover': {
              backgroundColor: Colors.black,
              filter: 'brightness(80%)',
              boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'}
          },
        },
        {
          props: { variant: 'white' },
          style: {
            fontWeight: 900,
            backgroundColor: Colors.white,
            color: Colors.black,
            fontSize: 18,
            textTransform: 'uppercase',
            borderRadius: 10,
            padding: '12px',
            lineHeight: 1,
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
            transition: 'all 1s',
            ':hover': {
              backgroundColor: Colors.white,
              filter: 'brightness(80%)',
              boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'}
          },
        },
      ],
    },
  },
});

export default theme;
