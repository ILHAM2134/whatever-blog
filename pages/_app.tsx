import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material";
import Head from "next/head";
import createEmotionCache from "@/utility/createEmotionCache";
import {
  lightThemeOptions,
  darkThemeOptions,
} from "@/styles/theme/themeOptions";
import Navbar from "@/components/Navbar";
import { AppWrapper } from "@/state/RootContext";
import "@/styles/globals.css";
import { NextPageContext } from 'next'
import Client from '@/sanity-config'

import App from 'next/app'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  title?: String;
  authors: any;
  categories: any,
  getInitialProps: any
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    title = "Whatever Blog",
    authors,
    categories
  } = props;

  console.log('_app.tsx rendered')
  console.log(authors );
  console.log(categories );

  const [isDarkMode, setIsDarkMode] = React.useState(true);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <AppWrapper>
            <Navbar authors={authors} categories={categories} />
            <Box
              sx={{
                mt: 10,
                maxWidth: 1100,
                mx: {
                  md: "auto",
                },
              }}
            >
              <Component {...pageProps} />
            </Box>
          </AppWrapper>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

MyApp.getInitialProps = async (context: NextPageContext) => {
  const authors = await Client.fetch(`*[_type == "author"]{name, "id": _id }`);
  const categories = await Client.fetch(
    `*[_type == "category"]{'name': title, "id": _id}`
  );

  const pageProps = await App.getInitialProps(context); // Retrieves page's `getInitialProps`
  
  return {
      ...pageProps,
      authors,
      categories
  };
};

export default MyApp;
