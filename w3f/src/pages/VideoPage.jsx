import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography } from '@mui/material';
import { ScreenshotVideoContent } from '../data/ScreenshotVideoContent';
import { MIniSliderScreenshots } from '../components/Slider/MIniSliderScreenshots';
import StarIcon from '@mui/icons-material/Star';
import { MenuVideo } from '../components/MenuVideo';
import { previewVideoContent } from '../data/previewVideoContent';
import { DescriptionVideo } from '../components/DescriptionVideo';

export const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(previewVideoContent[0]);


  return (
    <Box>
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

      {/* body VideoPage */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '22px', paddingTop: '28px' }}
      >
        <Box>
          <ReactPlayer width="856px" height="476px" controls
            url={currentVideo.urlVideo}
            style={{ backgroundColor: 'rgb(11,13,14)' }}
          />
          <Box
            sx={{ marginTop: '24px', padding: '20px 24px 48px 24px', backgroundColor: '#202932', maxWidth: '856px', }}
          >
            <MIniSliderScreenshots
              titleSlider="Screenshots "
              ScreenshotVideoContent={ScreenshotVideoContent}
            />
          </Box>

          <DescriptionVideo />
        </Box>

        {/* right section Video menu */}
        <MenuVideo setCurrentVideo={setCurrentVideo} />
      </Box>
    </Box>
  );
};
