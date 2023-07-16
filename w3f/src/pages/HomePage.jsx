import { Box } from '@mui/material';
import React from 'react';
import { Slider } from '../components/Slider/Slider';
import Sidebar from '../components/sidebar/Sidebar';
import { flowContent } from '../components/flowContent.js';
import { brandContent } from '../components/brandContent.js';

export const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
      <Sidebar />
      <Box>
        <Slider titleSlider="Popular brands " brandContent={brandContent} />
        <Slider titleSlider="Popular flows " flowContent={flowContent} />


      </Box>
    </Box>
  );
};
