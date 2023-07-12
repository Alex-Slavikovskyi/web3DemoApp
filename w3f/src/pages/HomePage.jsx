import { Box } from '@mui/material'
import React from 'react'
import { Slider } from '../components/Slider/Slider'
import Sidebar from '../components/sidebar/Sidebar'
import {flowContent} from '../components/flowContent.js';

export const HomePage = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between' ,gap: '16px'}}>
        <Sidebar />
          <Box>
          
              <Slider titleSlider="Popular flows " flowContent={flowContent} />
          
            
            {/* <Slider title="Latest Insights" flowContent={flowContent}/> */}
            
          </Box>
      </Box>
  )
}
