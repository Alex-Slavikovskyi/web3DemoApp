import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Button, Typography } from '@mui/material';
import { ScreenshotVideoContent } from '../components/data/ScreenshotVideoContent';
import { MIniSliderScreenshots } from '../components/Slider/MIniSliderScreenshots';
import StarIcon from '@mui/icons-material/Star';
import { MenuVideo } from '../components/MenuVideo';
import { previewVideoContent } from '../components/data/previewVideoContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(previewVideoContent[0]);

  const navigate = useNavigate();
  const handleBack = async () => {
    navigate(-1);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <ArrowBackIcon
        onClick={handleBack}
        sx={{
          cursor: 'pointer',
          width: '24px',
          height: '24px',
          color: '#FFF',
          position: 'absolute',
          left: -36,
        }}
      />
      <Box>
        <Typography
          variant="body1"
          sx={{ color: '#55E5C5', fontWeight: 600, fontSize: '18px' }}
        >
          Metamask
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#FFF', fontWeight: 600, fontSize: '20px' }}
        >
          Depositing Funds
        </Typography>
        <Typography variant="body2" sx={{ color: '#8f9498' }}>
          Desktop
        </Typography>
      </Box>

      {/* body VideoPage */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '22px' }}
      >
        <Box>
          <ReactPlayer
            url={currentVideo.urlVideo}
            controls
            width="856px"
            height="476px"
            style={{ backgroundColor: 'rgb(11,13,14)' }}
          />
          <Box
            sx={{
              marginTop: '24px',
              padding: '20px 24px 48px 24px',
              backgroundColor: '#202932',
              maxWidth: '856px',
            }}
          >
            <MIniSliderScreenshots
              titleSlider="Screenshots (101)"
              ScreenshotVideoContent={ScreenshotVideoContent}
            />
          </Box>

          <Box
            sx={{
              marginTop: '24px',
              padding: '20px',
              backgroundColor: '#202932',
              maxWidth: '856px',
              color: '#FFF',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '18px',
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontSize: '15px' }}>
                  Overall score
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'end' }}>
                  <StarIcon
                    sx={{
                      color: '#55E5C5',
                      height: '28px',
                      width: '28px',
                      margin: '0 0 0 3px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '28px',
                    }}
                  >
                    4.2/5
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '20px',
                      paddingLeft: '10px',
                    }}
                  >
                    How we calculate?
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: '63px' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '15px' }}>
                    Usability
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'end' }}>
                    <StarIcon
                      sx={{
                        color: '#55E5C5',
                        height: '28px',
                        width: '28px',
                        margin: '0 0 0 3px',
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '20px',
                      }}
                    >
                      4.2/5
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '15px' }}>
                    Utility
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'end' }}>
                    <StarIcon
                      sx={{
                        color: '#55E5C5',
                        height: '28px',
                        width: '28px',
                        margin: '0 0 0 3px',
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '20px',
                      }}
                    >
                      4.2/5
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '15px' }}>
                    Visual design
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'end' }}>
                    <StarIcon
                      sx={{
                        color: '#55E5C5',
                        height: '28px',
                        width: '28px',
                        margin: '0 0 0 3px',
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '20px',
                      }}
                    >
                      4.2/5
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
            >
              This Bitcoin experience is enjoyable and swift. Including a couple
              of shortcuts for the volume selection and allowing Apple Pay is
              convenient, especially for those who use their phones for
              transactions. Apart from the mandatory checkbox to confirm
              transaction terms and swiping to confirm the payment, there isn’t
              much more required from the user in this journey. From the
              animation, such as the Bitcoin amount moving to the bottom of the
              screen when confirming the purchase, to how the selling journey
              mirrors buying - Kraken has designed every aspect of the process
              to make it usable, engaging and consistent.
            </Typography>
          </Box>
        </Box>

        <MenuVideo setCurrentVideo={setCurrentVideo} />
      </Box>
    </Box>
  );
};
