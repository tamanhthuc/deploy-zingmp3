import { FC, useEffect } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import { AppPropsWithLayout } from '../models';
import { EmptyLayout } from '../components/layout';
import { createEmotionCache } from '../utils';
import { ThemeProvider1 } from '../context/ThemeContext';

const clientSideEmotionCache = createEmotionCache()
export function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider1>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        

        <Component {...pageProps} />
       
      </ThemeProvider>
      </ThemeProvider1>
    </>
  );
};

export default MyApp;