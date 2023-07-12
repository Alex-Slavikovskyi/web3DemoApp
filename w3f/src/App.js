import { Box, ThemeProvider } from '@mui/material';
import Layout from './layout/Layout';
import theme from './style/materialTheme';

// sx={{backgroundColor: '#0C1115'}}
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#0C1115' }}>
        <Layout />
      </Box>
    </ThemeProvider>
  );
}

export default App;
