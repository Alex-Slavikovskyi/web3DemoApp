import { Box, Typography } from '@mui/material';
import React from 'react';
import RatingCard from '../components/RatingCard';

function Rating() {
  return (
    <Box sx={{ maxWidth: '967px', margin: '0 auto', pt: '30px', pb: '30px' }}>
      <Box sx={{ mb: '30px' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '40px',
            fontWeight: '500',
            color: '#fff',
            mb: '30px',
          }}
        >
          Scoring logic
        </Typography>
        <Box sx={{ color: '#b9babc', fontSize: '18px' }}>
          <Typography variant="h6" sx={{ mb: '30px', lineHeight: '30px' }}>
            Below you’ll find the web3flows ratings breakdown for utility,
            usability, and visual design. These ratings are applied by our team
            of researchers.
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: '30px' }}>
            These three metrics are combined to form the overall rating for each
            score with the following weighting: utility (40%), usability (40%),
            visual design (20%). This weighting has been chosen to reflect the
            greater importance of utility and usability over visual design.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '25px' }}>
        <RatingCard
          title="Utility"
          subtitle="How advanced is the feature and is it fit for purpose?"
        />
        <RatingCard
          title="Usability"
          subtitle="Is the journey easy and fast to complete?"
        />
        <RatingCard
          title="Visual Design"
          subtitle="Is the design in-line with current trends and consistent across the journey?"
        />
      </Box>
    </Box>
  );
}

export default Rating;
