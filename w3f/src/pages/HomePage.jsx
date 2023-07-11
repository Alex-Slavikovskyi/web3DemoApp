import { Box } from '@mui/material'
import React from 'react'
import { Slider } from '../components/Slider/Slider'
import Sidebar from '../components/sidebar/Sidebar'

export const HomePage = () => {
  return (
    <Box sx={{display: 'flex'}}>
        <Sidebar />
          <Box>
            <Slider title="Popular flows "/>
            <Slider title="Latest Insights"/>
            
          </Box>
      </Box>
  )
}
