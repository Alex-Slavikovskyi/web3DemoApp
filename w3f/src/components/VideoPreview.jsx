import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export const VideoPreview = ({ preview, setCurrentVideo }) => (
  <Box sx={{
    padding: '2px', marginTop: '16px', display: 'flex', gap: '10px',
    // '&:hover': {
      // cursor: 'pointer',
      // backgroundColor: '#3A3F43'
    // }
  }}
    onClick={() => setCurrentVideo(preview)}
  >
    <CardMedia
      component="img"
      alt="prev"
      image={preview.prevImg}
      sx={{
        width: '134px',
        height: '84px',
        '&:hover': {
          cursor: 'pointer',
        }
      }} />
    <Box sx={{ paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Typography sx={{
        fontWeight: 600, fontSize: '13px', lineHeight: '16px', color: '#55E5C5',
        '&:hover': {
          cursor: 'pointer',
          textDecoration: 'underline'
        }}}
      >{preview.title}</Typography>
      <Typography sx={{
        fontWeight: 500, fontSize: '15px', lineHeight: '20px', color: '#FFF',
        '&:hover': {
          cursor: 'pointer',
          textDecoration: 'underline'
        }}}
        >{preview.subTitle}</Typography>
      <Box
        sx={{
          paddingTop: '4px',
          display: 'flex',
          justifyContent: 'start',
          color: '#8f9498',
          fontSize: '13px',
          alignItems: 'center',
        }}
      >
        <StarIcon sx={{ color: '#55E5C5', height: '17px', width: '17px', mb: '3px', }} />
        <span>{preview.startValue} | Desktop</span>
      </Box>
    </Box>
  </Box>
)
