import React from 'react';
import '../../style/slider.css'
import CardFlow from '../../UI/CardFlow';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import 'swiper/less';
import 'swiper/css/grid';


import { register } from 'swiper/element/bundle';
import { Box, Typography } from '@mui/material';
register();


export const Slider = () => {

  return (
    <Box sx={{ padding: '36px 10px 0 10px' }}>

      <swiper-container
        // initialSlide="1"
        slides-per-view="5"
        speed="500"
        loop="true"
        navigation="true"
        autoWidth="true"
        autoHeight="true"
        // grabCursor="true"
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


        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
        <swiper-slide autoWidth="true"
          autoHeight="true"><CardFlow /></swiper-slide>
      </swiper-container>
    </Box>

  )
}