import { Box, Container } from '@mui/material';
import React from 'react';
import Heder from '../components/Heder';
import Sidebar from '../components/sidebar/Sidebar';

function Layout() {
  return (
    <Box sx={{ backgroundColor: '#131A21' }}>
      <Heder />
      <Container>
        <Sidebar />
      </Container>
    </Box>
  );
}

export default Layout;
