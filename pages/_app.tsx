import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EmptyLayout } from "../components/layout";
import { ThemeProvider1 } from "../context/ThemeContext";
import { AppPropsWithLayout } from "../models";
import { wrapper } from "../redux/store";
import "../styles/globals.scss";
import { createEmotionCache, theme } from "../utils/index";



// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <ThemeProvider1> */}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <Layout> */}
            <Component {...pageProps} />
          {/* </Layout> */}
          <ToastContainer />
        </ThemeProvider>
      {/* </ThemeProvider1> */}
    </CacheProvider>
  );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;
