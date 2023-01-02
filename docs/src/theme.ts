import {createTheme, responsiveFontSizes} from '@mui/material/styles';

export const defaultTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
    primary: {
      main: process.env.NEXT_PUBLIC_PRIMARY,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif"
  }
}));


