import { Box } from '@mui/material';
import React from 'react';
import { Slider } from '../components/Slider/Slider';
import Sidebar from '../components/sidebar/Sidebar';
import { flowContent } from '../data/flowContent.js';
import { brandContent } from '../data/brandContent.js';
import { insightsContent } from '../data/insightsContent';
import Footer from '../components/Footer';
import { editorsChoiceContent } from '../data/editorsChoiceContent';


export const HomePage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '16px',
      }}
    >
      <Sidebar />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flexShrink: '1', pl: '220px' }}>
          <Slider titleSlider="Popular brands " brandContent={brandContent} />
          <Slider titleSlider="Popular flows " flowContent={flowContent} />
          <Slider titleSlider="Latest Insights " insightsContent={insightsContent} />
          <Slider titleSlider="Editor’s choice" editorsChoiceContent={editorsChoiceContent} />
        </Box>
        <Box sx={{ pl: '220px' }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
