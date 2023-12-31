import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Layout from './layout/Layout';
import theme from './style/materialTheme';
import './style/main.css';

// sx={{backgroundColor: '#0C1115'}}
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#131a21' }}>
        <Layout />
      </Box>
    </ThemeProvider>
  );
}

export default App;
