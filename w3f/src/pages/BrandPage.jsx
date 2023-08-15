import { Box } from '@mui/material'
import React from 'react'
import CardFlow from '../UI/CardFlow'
import { brandPageContent } from '../data/brandPageContent.js';
import { DescriptionBarndPage } from '../components/DescriptionBarndPage';


export const BrandPage = ({
  startValue = "4.2"
}) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      // gap: '24px',
      paddingTop: '24px',
      position: 'relative',
    }}>
      {/* description section */}
      <DescriptionBarndPage startValue={startValue} />

      {/* main section */}
      <Box sx={{
        width: '872px',
        display: 'flex',
        alignContent: 'start',
        flexWrap: 'wrap',
        gap: '26px'
      }}>
        {
          brandPageContent.map(card => (
            <CardFlow key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              startValue={card.startValue}
              device={card.device}
              image={card.image}
              subscription={card.subscription}
              card={card}
            />
          ))
        }
      </Box>
    </Box>
  )
}
