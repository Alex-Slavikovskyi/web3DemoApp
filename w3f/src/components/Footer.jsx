import { Box, Typography } from '@mui/material';
import React from 'react';

export function Footer() {
  return (
    <Box
      sx={{
        borderTop: '1px solid #2D3943',
        height: '70px',
        mt: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#b9babc',
        fontSize: '13px',
        lineHeight: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Typography
          variant="span"
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          Insights
        </Typography>
        <Typography
          variant="span"
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          FAQs
        </Typography>
        <Typography
          variant="span"
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          variant="span"
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          Terms & Conditions
        </Typography>
      </Box>
      <Typography
        variant="span"
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        Do you need any help? Contact us help@web3flows.com
      </Typography>
    </Box>
  );
}

export default Footer;
