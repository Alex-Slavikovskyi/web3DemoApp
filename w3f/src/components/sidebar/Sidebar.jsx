import { Box } from '@mui/material';
import React from 'react';
import Flows from './Flows';
import Brands from './Brands';

function Sidebar() {
  return (
    <Box
      sx={{
        height: '100%',
        borderLeft: '1px solid  #2D3943',
        borderRight: '1px solid  #2D3943',
        color: '#fff',
        width: '196px',
        fontSize: '14px',
      }}
    >
      <Flows />
      <Brands />
    </Box>
  );
}

export default Sidebar;
