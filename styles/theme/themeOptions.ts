import { ThemeOptions } from "@mui/material/styles";

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Inconsolata",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#0A0A0A",
    },
  },
  typography: {
    fontFamily: [
      "Inconsolata",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
};
