import { Avatar, Box } from '@mui/material';
import React from 'react';
import { SearchField } from './InputField';

function Heder() {
  return (
    <Box
      sx={{
        backgroundColor: '#131a21',
        zIndex: '10',
        position: 'sticky',
        top: '0',
        width: '100%',
        height: '60px',
        borderBottom: '1px solid #2D3943',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '1320px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <img src="images/heder/W3F.png" alt="W3F" />
        </Box>
        <SearchField />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Avatar src="images/heder/avatar.svg" />
          <Box
            sx={{
              h: '24px',
              w: '24px',
            }}
          >
            <img
              src="images/heder/arrowDown.svg"
              alt="logo user"
              style={{ width: '24px', height: '24px', marginTop: '10px' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Heder;
