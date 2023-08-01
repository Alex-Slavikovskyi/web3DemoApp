import { Box } from '@mui/material';
import React from 'react';
import { Slider } from '../components/Slider/Slider';
import Sidebar from '../components/sidebar/Sidebar';
import { flowContent } from '../components/data/flowContent.js';
import { brandContent } from '../components/data/brandContent.js';
import { insightsContent } from '../components/data/insightsContent'

export const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
      <Sidebar />
      <Box>
        <Slider titleSlider="Popular brands " brandContent={brandContent} />
        <Slider titleSlider="Popular flows " flowContent={flowContent} />
        <Slider titleSlider="Latest Insights " insightsContent={insightsContent} />


      </Box>
    </Box>
  );
};
