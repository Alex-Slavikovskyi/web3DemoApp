import { Box } from '@mui/material';
import React from 'react';
import Heder from '../components/Heder';
import { Outlet, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import '../style/main.scss';
import Footer from '../components/Footer';

function Layout() {
  const location = useLocation();

  return (
    <CssBaseline>
      <Heder />
      {/* <Box sx={{ width: '1440px', margin: '0 auto' }}> */}
      <Box
        sx={{
          minHeight: '100vh',
          // width: '1320px',
          margin: '0 auto',
        }}
      >
        <Outlet />
        {location.pathname !== '/' && <Footer />}
      </Box>
      {/* </Box> */}
    </CssBaseline>
  );
}

export default Layout;
