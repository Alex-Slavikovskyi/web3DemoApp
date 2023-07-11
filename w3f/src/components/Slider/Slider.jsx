import React from 'react';
import '../../style/slider.css'
import CardFlow from '../../UI/CardFlow';
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import { Box, Typography } from '@mui/material';
register();


export const Slider = () => {

  return (
    <Box sx={{ padding: '36px 10px 0 10px' }}>

      <swiper-container
        slides-per-view="5"
        speed="500"
        loop="true"
        navigation="true"
        autoWidth="true"
        autoHeight="true"
        grabCursor="true"
        direction='horizontal'
      >
        <Typography variant="h6" slot="container-start"
          sx={{
            color: '#fff',
            fontWeight: 600,
            paddingBottom: '4px'
          }}
        >
          Popular flows
        </Typography>

        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
        <swiper-slide><CardFlow /></swiper-slide>
      </swiper-container>
    </Box>

  )
}