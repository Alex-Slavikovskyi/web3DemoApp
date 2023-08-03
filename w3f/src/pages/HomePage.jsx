import { Box } from '@mui/material';
import React from 'react';
import { Slider } from '../components/Slider/Slider';
import Sidebar from '../components/sidebar/Sidebar';
import { flowContent } from '../components/data/flowContent.js';
import { brandContent } from '../components/data/brandContent.js';
import { insightsContent } from '../components/data/insightsContent';

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
        </Box>
        <Box sx={{ pl: '220px' }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
