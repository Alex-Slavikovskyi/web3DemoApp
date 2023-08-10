import { Box, Button, CardMedia, Typography, styled } from '@mui/material'
import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { saveAs } from 'file-saver';


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
// ----end----

const ButtonStyled = styled(Button)((props) => ({
  color: '#FFF',
  textTransform: 'capitalize',
  borderRadius: '15px',
  padding: '3px 12px',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
    backgroundColor: 'inherit',
  }
}))

const SwiperStyled = styled(Swiper)((props) => ({
  zIndex: 9999,
  "& .swiper-button-prev": {
    top: 64,
    left: 40,
    '&::before': {
      content: `''`,
      top: 0,
      right: 0,
      zIndex: 10,
      position: 'absolute',
      width: '74px',
      height: '88px',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
    },
    '&::after': {
      content: `''`,
      zIndex: 11,
      top: 30,
      right: 40,
      position: 'absolute',
      backgroundImage: `url(../svg/VectorPrev.svg)`,
      backgroundSize: '24px 24px',
      backgroundRepeat: 'no-repeat',
      width: '24px',
      height: '24px',
    }
  },

  "& .swiper-button-next": {
    top: 64,
    right: -6,
    '&::before': {
      content: `''`,
      top: 0,
      right: 0,
      zIndex: 10,
      position: 'absolute',
      width: '74px',
      height: '88px',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
    },
    '&::after': {
      content: `''`,
      zIndex: 11,
      top: 30,
      right: 6,
      position: 'absolute',
      backgroundImage: `url(../svg/VectorNext.svg)`,
      backgroundSize: '24px 24px',
      backgroundRepeat: 'no-repeat',
      width: '24px',
      height: '24px',
    }
  }
}))


export const MIniSliderScreenshots = ({ titleSlider, ScreenshotVideoContent }) => {


  const handleDownloadClick = () => {
    // Путь к вашему архиву с файлами
    const zipFilePath = '../save/binance-onboarding.zip';
    
    // Загрузка архива с использованием библиотеки FileSaver.js
    fetch(zipFilePath)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'binance-onboarding.zip');
      })
      .catch(error => {
        console.error('Ошибка при загрузке архива:', error);
      });
  };

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} slot="container-start">
          <Typography variant="h6"
            sx={{
              color: '#fff',
              fontWeight: 600,
              paddingBottom: '12px'
            }}
          >
            {ScreenshotVideoContent && `${titleSlider} (${ScreenshotVideoContent.length})`}
          </Typography>
          <ButtonStyled startIcon={<FileDownloadOutlinedIcon />}
          onClick={handleDownloadClick}
          >
            Download all
          </ButtonStyled>
        </Box>

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
