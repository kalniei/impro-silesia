import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/styles/theme';
import '../src/styles/globals.css';
import MainLayout from '../components/layout/MainLayout';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import SnackbarProvider from '../snackbar/snackbarState';
import CustomSnackbar from '../snackbar/CustomSnackbar';

function App({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Impro Silesia - Improwizacja na Śląsku</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Śląskie Centrum Improwizacji - warsztaty, wydarzenia, Otwarta Scena! Promujemy impro na śląsku, tworzymy środowisko, uczymy technik improwizacji, które możesz wykorzystać na scenie, w biznesie i w życiu. Impro Śląsk, Impro Katowice, Impro Silesia"
        />
        <meta property="og:url" content="https://improsilesia.pl/" />
        <meta property="og:title" content="Impro Silesia" />
        <meta
          property="og:description"
          content="Śląskie Centrum Improwizacji - warsztaty, wydarzenia, Otwarta Scena!"
        />
        <meta property="og:image" content="https://improsilesia.pl/static/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="google-site-verification"
          content="Z_FR2tWKnUFlR9N991OQDQGGXhlai2hgi_ERrR1MjDA"
        />
      </Head>
      <StyledEngineProvider injectFirst>
        <SnackbarProvider>
          <ThemeProvider theme={theme} {...pageProps}>
            <CssBaseline />
            <MainLayout {...pageProps}>
              <Component {...pageProps} />
            </MainLayout>
            <CustomSnackbar />
          </ThemeProvider>
        </SnackbarProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
