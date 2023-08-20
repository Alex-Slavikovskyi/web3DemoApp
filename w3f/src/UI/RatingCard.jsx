import { Box, Rating, Typography } from '@mui/material';
import React from 'react';

function RatingCard({ card }) {
  return (

    <Box sx={{ mb: '25px', height: '109px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#fff',
        }}
      >
        <Rating
          name="read-only"
          readOnly
          value={card.rating}
          max={5}
          sx={{
            color: '#55E5C5',
            height: '20px',
            mb: '5px',
            '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
              color: '#55E5C5',
            },
          }}
        />
        <p>{card.rating} / 5</p>
      </Box>
      <Typography
        variant="h6"
        sx={{ color: '#b9babc', lineHeight: '20px', fontSize: '15px' }}
      >
        {card.description}
      </Typography>
    </Box>

  );
}

export default RatingCard;
