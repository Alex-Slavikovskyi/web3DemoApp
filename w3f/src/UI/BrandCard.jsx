import { Box, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

function BrandCard({
  name,
  journeys,
  startValue,
  image,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        color: '#fff',
      }}
    >
      <Box>
        <img
          style={{ height: '48px', width: '48px' }}
          src={image}
          alt="logo"
        />
      </Box>
      <Typography variant="h6">{name}</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '9px',
          mt: '8px',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '17px',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',

            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <StarIcon sx={{ color: '#55E5C5', height: '17px' }} />
          <span> {startValue} </span>
        </Box>
        <span>|</span>
        <span> {journeys} journeys</span>
      </Box>
    </Box>
  );
}

export default BrandCard;
