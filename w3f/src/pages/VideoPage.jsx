import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ScreenshotVideoContent } from '../data/ScreenshotVideoContent';
import { MIniSliderScreenshots } from '../components/Slider/MIniSliderScreenshots';
import { MenuVideo } from '../components/MenuVideo';
import { previewVideoContent } from '../data/previewVideoContent';
import { DescriptionVideo } from '../components/DescriptionVideo';
import { previewSuggestedJourneys } from '../data/previewVideoContent';
import { previewMoreBrand } from '../data/previewVideoContent';
import Container from '../components/Container';
import ReactPlayable from 'react-playable';

export const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(previewVideoContent[0]);

  return (
    <Container>
      <Box sx={{ paddingTop: '16px' }}>
        <Typography sx={{ color: '#55E5C5', fontWeight: 600, fontSize: '18px', lineHeight: '22px' }}
        >
          Binance
        </Typography>
        <Typography sx={{ color: '#FFF', fontWeight: 600, fontSize: '20px', lineHeight: '24px' }}
        >
          Onboarding
        </Typography>
        <Typography variant="body2" sx={{ color: '#8f9498', lineHeight: '17px' }}>
          Desktop
        </Typography>
      </Box>

      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '22px', padding: '28px 0 24px 0', }}>
          <Box sx={{ height: '700px' }}>
            <ReactPlayable width={856} height={476}
              src={currentVideo.urlVideo}
              poster="../video/posterVideo.png"
            />
            <Box
              sx={{ marginTop: '24px', padding: '20px 24px 0 24px', backgroundColor: '#202932', maxWidth: '856px' }}
            >
              <MIniSliderScreenshots
                titleSlider="Screenshots "
                ScreenshotVideoContent={ScreenshotVideoContent}
              />
            </Box>
          </Box>

          {/* right section Video menu */}
          <MenuVideo
            setCurrentVideo={setCurrentVideo}
            previewSuggestedJourneys={previewSuggestedJourneys}
            previewMoreBrand={previewMoreBrand}
          />
        </Box>
        <DescriptionVideo />
      </Box>
    </Container>
  );
};
