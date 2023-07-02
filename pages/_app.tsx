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

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  title?: String;
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
  } = props;

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
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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

export const getServerSideProps = () => {};

export default MyApp;
