import { Box, CardMedia, Typography, styled } from '@mui/material'
import React from 'react'

// style for slider
// import '../../style/miniSlider.scss'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import { register } from 'swiper/element/bundle';
register();
// ----end----


const SwiperStyled = styled(Swiper)((props) => ({

  "& .swiper-button-prev": {
    top: 84,
    left: -6,
    '&::after': {
      content: `''`,
      backgroundImage: `url(../svg/VectorPrev.svg)`,
      backgroundSize: '24px 24px',
      backgroundRepeat: 'no-repeat',
      width: '24px',
      height: '24px',
    }
  },
  "& .swiper-button-next": {
    top: 84,
    right: -6,
    '&::after': {
      content: `''`,
      backgroundImage: `url(../svg/VectorNext.svg)`,
      backgroundSize: '24px 24px',
      backgroundRepeat: 'no-repeat',
      width: '24px',
      height: '24px',
    }
  }
}))


export const MIniSliderScreenshots = ({ titleSlider, ScreenshotVideoContent }) => {
  return (
    <Box>
      <SwiperStyled
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
        // loop
        slidesPerView={5.5}
        speed={500}
        navigation
        spaceBetween={10}
        grabCursor
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
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
          ScreenshotVideoContent && ScreenshotVideoContent.map(card => (
            <SwiperSlide key={card.id}>
              <CardMedia
                component="img"
                alt="brand_logo"
                image={card.image}
                sx={{
                  width: '134px',
                  height: '84px',
                }}
              />
            </SwiperSlide>
          ))
        }
      </SwiperStyled>
    </Box>

  )
}
