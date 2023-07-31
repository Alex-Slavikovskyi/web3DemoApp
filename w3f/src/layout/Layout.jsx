import { Box, Container } from '@mui/material';
import React from 'react';
import Heder from '../components/Heder';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import '../style/main.scss';
import Footer from '../components/Footer';

function Layout() {
  return (
    <CssBaseline>
      <Box
        sx={{ backgroundColor: '#0C1115', width: '1440px', margin: '0 auto', }}
      >
        <Box sx={{ minHeight: '100vh', width: '1320px', margin: '0 auto', }}>
          <Heder />
          <Outlet />

          <Footer />
        </Box>
      </Box>
    </CssBaseline>
  );
}

export default Layout;
