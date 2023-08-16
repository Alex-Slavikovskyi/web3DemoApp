import { Box, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export const ProjectsDescriptopn = ({ item }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: '40px',
          fontWeight: '500',
          color: '#fff',
          mb: '30px',
        }}
      >
        {item.title}
      </Typography>
      <img src={item.image} />
      <Typography variant="h6" sx={{ mt: '30px', fontWeight: '400' }}>
        {item.description}
      </Typography>

      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#fff',
          mt: '40px',
          mb: '16px',
        }}
      >
        See the full journey:
      </Typography>

      <Box
        sx={{
          width: '636px',
          height: '152px',
          p: '2px',
          bgcolor: '#202932',
          display: 'flex',
          mb: '100px',
          gap: '24px',
        }}
      >
        <img src={item.prevImg} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '16px',
              color: '#55E5C5',
              mb: '2px',
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
              },
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '20px',
              mb: '8px',
              color: '#FFF',
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
              },
            }}
          >
            Buy crypto
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              color: '#8f9498',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '16px',
              alignItems: 'center',
              mb: '8px',
            }}
          >
            <StarIcon
              sx={{
                color: '#55E5C5',
                height: '16px',
                width: '16px',
                paddingRight: '2px',
              }}
            />
            <span>{item.starValue} | Desktop</span>
          </Box>
          <Typography
            variant="p"
            sx={{
              color: '#8f9498',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '14px',
              transition: 'all 0.3s ease',
              '&:hover': {
                cursor: 'pointer',
                color: '#fff',
              },
            }}
          >
            Crypto Exchange • Crypto wallet
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
