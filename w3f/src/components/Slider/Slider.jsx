import React from 'react';
import CardFlow from '../../UI/CardFlow';
import { Box, Typography, styled } from '@mui/material';
import BrandCard from '../../UI/BrandCard';
import { InsightsCard } from '../../UI/InsightsCard';

// style for slider
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import { register } from 'swiper/element/bundle';
register();


const SwiperStyled = styled(Swiper)((props) => {
  return ({
    "& .swiper-button-prev": {
      top: 30,
      left: '94.5%',
      '&::after': {
        content: `''`,
        width: '14px',
        height: '14px',
        zIndex: 11,
        position: 'absolute',
        backgroundImage: `url(../svg/VectorSliderPrevShadow.svg)`,
        fill: 'red',
        color: 'red',
        backgroundSize: '14px 14px',
        backgroundRepeat: 'no-repeat',
        '& svg': {
          color: 'red',
          fill: 'blue',
        }
      }
    },

    "& .swiper-button-next": {
      top: 30,
      
      '&::after': {
        content: `''`,
        zIndex: 11,
        position: 'absolute',
        backgroundImage: `url(../svg/VectorSliderNextShadow.svg)`,
        backgroundSize: '14px 14px',
        backgroundRepeat: 'no-repeat',
        width: '14px',
        height: '14px',
      }
    }
  });
})


export const Slider = ({ titleSlider, flowContent, brandContent, insightsContent, editorsChoiceContent }) => {

  return (
    <Box sx={{ padding: '36px 0 0 12px', maxWidth: '1108px' }}>
      <SwiperStyled
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
        // loop
        slidesPerView={5}
        slides-per-roup={1}
        speed={500}
        navigation
        spaceBetween={24}
        grabCursor
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
            <SwiperSlide key={card.id}>
              <BrandCard
                name={card.name}
                journeys={card.journeys}
                startValue={card.startValue}
                image={card.image}
              />
            </SwiperSlide>
          ))
        }

        {
          flowContent && flowContent.map(card => (
            <SwiperSlide key={card.id}>
              <CardFlow
                title={card.title}
                subtitle={card.subtitle}
                startValue={card.startValue}
                image={card.image}
                subscription={card.subscription}
              />
            </SwiperSlide>
          ))
        }
        {
          insightsContent && insightsContent.map(card => (
            <SwiperSlide key={card.id}>
              <InsightsCard
                name={card.name}
                data={card.data}
                image={card.image} />
            </SwiperSlide>
          ))
        }
        {
          editorsChoiceContent && editorsChoiceContent.map(card => (
            <SwiperSlide key={card.id}>
              <CardFlow
                title={card.title}
                subtitle={card.subtitle}
                startValue={card.startValue}
                image={card.image}
                subscription={card.subscription}
              />
            </SwiperSlide>
          ))
        }
      </SwiperStyled>
    </Box>

  )
}