import React from 'react';
import '../../style/slider.scss'
import CardFlow from '../../UI/CardFlow';
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import { Box, Typography } from '@mui/material';
import BrandCard from '../../UI/BrandCard';
import { InsightsCard } from '../../UI/InsightsCard';

register();


export const Slider = ({ titleSlider, flowContent, brandContent, insightsContent, ScreenshotVideoContent }) => {

  return (
    <Box sx={{ padding: '50px 0 0 12px', maxWidth: '1108px', }}>

      <swiper-container
        slides-per-view="5"
        speed="500"
        // loop="true"
        navigation="true"
        space-between={24}
        autoWidth="true"
        // autoHeight="true"
        // grabCursor="true"
        direction='horizontal'
      >
        <Typography variant="h6" slot="container-start"
          sx={{
            color: '#fff',
            fontWeight: 600,
            paddingBottom: '12px'
          }}
        >
          {titleSlider}
        </Typography>

        {
          brandContent && brandContent.map(card => (
            <swiper-slide key={card.id}>
              <BrandCard
                name={card.name}
                journeys={card.journeys}
                startValue={card.startValue}
                image={card.image}
              />
            </swiper-slide>
          ))
        }

        {
          flowContent && flowContent.map(card => (
            <swiper-slide key={card.id}>
              <CardFlow
                title={card.title}
                subtitle={card.subtitle}
                startValue={card.startValue}
                image={card.image}
                subscription={card.subscription}
              />
            </swiper-slide>
          ))
        }
        {
          insightsContent && insightsContent.map(card => (
            <swiper-slide key={card.id}>
              <InsightsCard
                name={card.name}
                data={card.data}
                image={card.image} />
            </swiper-slide>
          ))
        }
      </swiper-container>
    </Box>

  )
}