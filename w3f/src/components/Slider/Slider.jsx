import React from 'react';
import '../../style/slider.scss'
import CardFlow from '../../UI/CardFlow';
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import { Box, Typography } from '@mui/material';
register();


export const Slider = ({title}) => {

  return (
    <Box sx={{ padding: '36px 10px 0 48px', maxWidth: '1200px', }}>

      <swiper-container
        slides-per-view="5"
        speed="500"
        loop="true"
        navigation="true"
        space-between={10}
        autoWidth="true"
        // autoHeight="true"
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
          {title}
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