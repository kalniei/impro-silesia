import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../src/styles/theme';
import ServerStyleSheets from '@mui/styles/ServerStyleSheets';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600i,600,700"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Asap:100,300,400,600,700,900"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  };
};
