import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import Container from './Container';



export function Footer() {
  const emailAddress = 'help@web3flows.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <Container>
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
                textDecoration: 'underline'
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
                textDecoration: 'underline'
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
                textDecoration: 'underline'
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
                textDecoration: 'underline'
              },
            }}
          >
            Terms & Conditions
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="span"
          >
            Do you need any help? Contact us  
          </Typography>

          &nbsp;

          <Link 
          href={`mailto:${emailAddress}`} 
          onClick={handleEmailClick}
          color="inherit"
          underline="none"
          sx={{
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline'
              },
            }}
          >
              {emailAddress}
          </Link>
        </Box>

      </Box>
    </Container>
  );
}

export default Footer;
