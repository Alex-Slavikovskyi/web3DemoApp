import { Box } from '@mui/material';
import React from 'react';
import Flows from './Flows';
import Brands from './Brands';

function Sidebar() {
  return (
    <Box
      sx={{
        borderLeft: '1px solid  #2D3943',
        borderRight: '1px solid  #2D3943',
        color: '#fff',
        width: '196px',
        fontSize: '14px',
        position: 'fixed',
        top: '60px',
      }}
    >
      <Flows />
      <Brands />
    </Box>
  );
}

export default Sidebar;
