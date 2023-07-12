import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Barlow, Arial, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@import':
          'url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Roboto&display=swap")',
      },
    },
  },
});

export default theme;
