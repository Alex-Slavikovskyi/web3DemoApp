import { Box, Rating, Typography } from '@mui/material';
import React from 'react';

function RatingCard({ title, subtitle }) {
  return (
    <Box sx={{ backgroundColor: '#202932', width: '306px', padding: '20px' }}>
      <Box
        sx={{ color: '#fff', borderBottom: '1px solid #2D3943', mb: '20px' }}
      >
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '24px',
            mb: '20px',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: '15px', lineHeight: '24px', mb: '20px' }}>
          {subtitle}
        </Typography>
      </Box>
      <Box sx={{ mb: '25px' }}>
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
            value="5"
            sx={{
              color: '#55E5C5',
              height: '20px',
              mb: '5px',
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: '#55E5C5',
              },
            }}
          />
          <p>5 / 5</p>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: '#b9babc', lineHeight: '20px', fontSize: '15px' }}
        >
          The journey is easy to complete and extremely efficient in terms of
          cognitive load etc.
        </Typography>
      </Box>

      <Box sx={{ mb: '25px' }}>
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
            value="4"
            sx={{
              color: '#55E5C5',
              height: '20px',
              mb: '5px',
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: '#55E5C5',
              },
            }}
          />
          <p>4 / 5</p>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: '#b9babc', lineHeight: '20px', fontSize: '15px' }}
        >
          The journey is easy to complete and extremely efficient in terms of
          cognitive load etc.
        </Typography>
      </Box>

      <Box sx={{ mb: '25px' }}>
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
            value="3"
            sx={{
              color: '#55E5C5',
              height: '20px',
              mb: '5px',
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: '#55E5C5',
              },
            }}
          />
          <p>3 / 5</p>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: '#b9babc', lineHeight: '20px', fontSize: '15px' }}
        >
          The journey is easy to complete and extremely efficient in terms of
          cognitive load etc.
        </Typography>
      </Box>

      <Box sx={{ mb: '25px' }}>
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
            value="2"
            sx={{
              color: '#55E5C5',
              height: '20px',
              mb: '5px',
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: '#55E5C5',
              },
            }}
          />
          <p>2 / 5</p>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: '#b9babc', lineHeight: '20px', fontSize: '15px' }}
        >
          The journey is easy to complete and extremely efficient in terms of
          cognitive load etc.
        </Typography>
      </Box>

      <Box sx={{ mb: '25px' }}>
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
            value="1"
            sx={{
              color: '#55E5C5',
              height: '20px',
              mb: '5px',
              '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
                color: '#55E5C5',
              },
            }}
          />
          <p>1 / 5</p>
        </Box>
        <Typography
          variant="h6"
          sx={{ color: '#b9babc', lineHeight: '20px', fontSize: '15px' }}
        >
          The journey is easy to complete and extremely efficient in terms of
          cognitive load etc.
        </Typography>
      </Box>
    </Box>
  );
}

export default RatingCard;
