import { Box, CardMedia, Typography, styled } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const HoverStyled = styled(CardMedia)((props) => ({
  position: 'relative',
  width: '120px',
  height: '80px',
  backgroundColor: '#202932',
  transition: 'all 0.3s ease',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#202932',
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: '12',
      top: 'calc(50% - 9px)',
      left: 'calc(50% - 9px)',
      width: '18px',
      height: '18px',
      backgroundImage: `url('images/flowCardsContent/playbutton.svg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: '10',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .3)',
    },
  },
}));

export const VideoPreview = ({ preview, setCurrentVideo }) => (
  <Box
    sx={{
      padding: '0 16px 16px',
      display: 'flex',
      gap: '10px',

    }}

  >
    <HoverStyled
      // component="img"
      // alt="prev"
      image={preview.prevImg}
      onClick={() => setCurrentVideo(preview)}
    />

    <Box
      onClick={() => setCurrentVideo(preview)}
      sx={{
        paddingTop: '6px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '16px',
          color: '#55E5C5',
          '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
          },
        }}
      >
        {preview.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '20px',
          color: '#FFF',
          '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
          },
        }}
      >
        {preview.subTitle}
      </Typography>
      <Box
        sx={{
          paddingTop: '4px',
          display: 'flex',
          justifyContent: 'start',
          color: '#8f9498',
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: '16px',
          alignItems: 'center',
        }}
      >
        <StarIcon
          sx={{ color: '#55E5C5', height: '16px', width: '16px', paddingRight: '2px' }}
        />
        <span>{preview.startValue} | Desktop</span>
      </Box>
    </Box>
  </Box>
);
