import { Box, Container } from '@mui/material';
import React from 'react';
import Heder from '../components/Heder';
import Sidebar from '../components/sidebar/Sidebar';
import CardFlow from '../UI/CardFlow';

function Layout() {
  return (
    <Box sx={{ backgroundColor: '#131A21' }}>
      <Heder />
      <Container sx={{ display: 'flex' }}>
        <Sidebar />
        <CardFlow />
      </Container>
    </Box>
  );
}

export default Layout;
