import { Box, Container } from '@mui/material';
import React from 'react';
import Heder from '../components/Heder';
import Sidebar from '../components/sidebar/Sidebar';
import { Slider } from '../components/Slider/Slider';

function Layout() {
  return (
    <Box sx={{ backgroundColor: '#131A21' }}>
      <Heder />
      <Container sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Slider />
          <Slider />
        </Box>
      </Container>
    </Box>
  );
}

export default Layout;
