import { Box, Typography } from '@mui/material'
import React from 'react'
import RatingCard from '../UI/RatingCard'

export const CategoriesRating = ({ title, subTitle, cards }) => {


  return (
    <Box sx={{ backgroundColor: '#202932', width: '306px', padding: '20px' }}>
      <Box
        sx={{ color: '#fff', borderBottom: '1px solid #2D3943', mb: '20px' }}
      >
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '24px',
            mb: '20px',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: '15px', lineHeight: '24px', mb: '20px' }}>
          {subTitle}
        </Typography>
      </Box>
      {
        cards.map(card => (
          <RatingCard card={card} />
        ))
      }

    </Box>
  )
}
