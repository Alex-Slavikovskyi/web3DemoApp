import React from 'react';
import '../../style/slider.scss'
import CardFlow from '../../UI/CardFlow';
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import { Box, Typography } from '@mui/material';

register();


export const Slider = ({ titleSlider, flowContent }) => {

  return (
    <Box sx={{ padding: '36px 0 0 0', maxWidth: '1108px', }}>

      <swiper-container
        slides-per-view="5"
        speed="500"
        loop="true"
        navigation="true"
        space-between={24}
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
          {titleSlider}
        </Typography>

        {
          flowContent.map(card => (
            <swiper-slide key={card.id}>
              <CardFlow 
                title={card.title}
                subtitle={card.subtitle}
                startValue={card.startValue}
                image={card.image}
                subscription={card.subscription}
                card={card}
              />
            </swiper-slide>
          ))
        }

        
      </swiper-container>
    </Box>

  )
}