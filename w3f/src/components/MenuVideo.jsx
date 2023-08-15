import { Box, Tab, Tabs, styled } from '@mui/material'
import React, { useState } from 'react'
import { VideoPreview } from './VideoPreview';
// import { previewVideoContent } from '../data/previewVideoContent';



const CustomTab = styled(Tab)((props) => ({
  fontWeight: '600',
  height: '36px',
  fontSize: '14px',
  width: '50%',
  textTransform: 'capitalize',
  textDecoration: 'blink',
  border: '1px solid #3B4753',
  color: '#FFF',
  '&:hover': {
    cursor: 'pointer',
  },
  '&.Mui-selected': {
    backgroundColor: '#55E5C5',
    color: '#131A21',
  },
}));



export const MenuVideo = ({ setCurrentVideo, previewSuggestedJourneys, previewMoreBrand }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box sx={{
      color: '#FFF',
      backgroundColor: "#202932",
      // background: 'rgba(64, 64, 64, 1)',
      width: '100%',
      height: '700px',
    }}>


      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor='none' sx={{ padding: '24px 16px 16px 16px' }}>
        <CustomTab label="Suggested journeys" key='Suggested' />
        <CustomTab label="More from brand" key='More' />
      </Tabs>

      <Box sx={{ overflow: 'auto', height: '600px', }}>
        {
          tabIndex === 0 && previewSuggestedJourneys && previewSuggestedJourneys.map(preview => (
            <VideoPreview preview={preview} setCurrentVideo={setCurrentVideo} key={preview.id} />
          ))
        }
        {
          tabIndex === 1 && previewMoreBrand && previewMoreBrand.map(preview => (
            <VideoPreview preview={preview} setCurrentVideo={setCurrentVideo} key={preview.id} />
          ))
        }
      </Box>
    </Box>
  )
}
