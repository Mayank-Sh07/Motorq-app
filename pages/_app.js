import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { supabase } from "../supabase";
import { UserContextProvider } from "../supabase/authentication";
import { SnackbarProvider } from "notistack";
import { createTheme } from "@material-ui/core/styles";
import "tailwindcss/tailwind.css";
import "react-awesome-button/dist/styles.css";
import "../styles/globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const theme = createTheme();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Course++</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UserContextProvider supabaseClient={supabase}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </UserContextProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
