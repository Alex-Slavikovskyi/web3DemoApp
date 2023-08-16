import { Avatar, Box } from '@mui/material';
import React from 'react';
import { SearchField } from './InputField';
import { NavLink } from 'react-router-dom';
import Container from './Container';

function Heder() {
  return (
    <Box
      sx={{
        backgroundColor: '#131a21',
        zIndex: '10',
        position: 'sticky',
        top: '0',
        width: '100%',
        borderBottom: '1px solid #2D3943',
      }}
    >
      <Container>
        <Box
          sx={{
            height: '60px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavLink to="/">
            <Box
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <img
                src="images/heder/W3F.svg"
                style={{ height: '29px', width: '48px' }}
                alt="W3F"
              />
            </Box>
          </NavLink>
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
      </Container>
    </Box>
  );
}

export default Heder;
