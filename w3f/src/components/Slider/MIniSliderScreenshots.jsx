import { AppBar, Box, Button, CardMedia, Dialog, IconButton, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { saveAs } from 'file-saver';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  zIndex: 1,

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


  //---------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <Box sx={{ height: '180px' }}>
      <SwiperStyled
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
        // loop
        slidesPerView={5.5}
        slides-per-roup={1}
        speed={500}
        navigation
        spaceBetween={10}
      // grabCursor
      // pagination
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
                onClick={() => handleSlideClick(card.id)}
                image={card.image}
                sx={{
                  width: '134px',
                  height: '84px',
                  cursor: 'pointer',
                }}
              />
            </SwiperSlide>
          ))
        }
      </SwiperStyled>



      <Dialog  maxWidth='md' open={isOpen} onClose={handleClose} sx={{
        backgroundColor: '#202932', zIndex: 2,
      }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={() => setActiveIndex(activeIndex - 1)} disabled={activeIndex === 0} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <img
            src={ScreenshotVideoContent[activeIndex].image}
            alt={`Slide ${ScreenshotVideoContent[activeIndex].id}`}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
          <IconButton color="inherit" onClick={() => setActiveIndex(activeIndex + 1)} disabled={activeIndex === ScreenshotVideoContent.length - 1} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </Dialog>




      {/* <Dialog open={isOpen} onClose={handleClose} sx={{ backgroundColor: '#202932', zIndex: 2, }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative', height: '100%' }}>
          <IconButton color="inherit" onClick={() => setActiveIndex(activeIndex - 1)} disabled={activeIndex === 0} sx={{ position: 'absolute', left: 0 }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <img
            src={ScreenshotVideoContent[activeIndex].image}
            alt={`Slide ${ScreenshotVideoContent[activeIndex].id}`}
            style={{ width: '100vw', height: '100%', objectFit: 'contain' }}
          />
          <IconButton color="inherit" onClick={() => setActiveIndex(activeIndex + 1)} disabled={activeIndex === ScreenshotVideoContent.length - 1} style={{ position: 'absolute', right: 0 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </Dialog> */}
      




      {/* <Dialog open={isOpen} onClose={handleClose}
        sx={{
          backgroundColor: '#202932',
          zIndex: 2,

        }}
      >
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: '#19232C',
            }}>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <img
          src={ScreenshotVideoContent[activeIndex].image}
          alt={`Slide ${ScreenshotVideoContent[activeIndex].id}`}
          style={{ width: '100vw', height: '100%', objectFit: 'contain', }}
        />
      </Dialog> */}


    </Box>
  )
}
