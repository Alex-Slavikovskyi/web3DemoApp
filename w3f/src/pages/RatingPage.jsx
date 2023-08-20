import { Box, Typography } from '@mui/material';
import React from 'react';
import { ratingPageUtility } from '../data/ratingPageContent';
import { CategoriesRating } from '../components/CategoriesRating';
import { ratingPageUsability } from '../data/ratingPageContent';
import { ratingPageVisualDesign } from '../data/ratingPageContent';


function RatingPage() {
  return (
    <Box
      sx={{
        maxWidth: '967px',
        margin: '0 auto',
        pt: '30px',
        pb: '30px',
        mb: '170px',
      }}
    >
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
        <Box
          sx={{
            color: '#b9babc',
            fontSize: '18px',
            fontWeight: '400',
            mb: '55px',
          }}
        >
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
        {
          ratingPageUtility && <CategoriesRating
            cards={ratingPageUtility.cards}
            title={ratingPageUtility.title}
            subTitle={ratingPageUtility.subTitle}
          />
        }
        {
          ratingPageUsability && <CategoriesRating
            cards={ratingPageUsability.cards}
            title={ratingPageUsability.title}
            subTitle={ratingPageUsability.subTitle}
          />
        }
        {
          ratingPageVisualDesign && <CategoriesRating
            cards={ratingPageVisualDesign.cards}
            title={ratingPageVisualDesign.title}
            subTitle={ratingPageVisualDesign.subTitle}
          />
        }


      </Box>
    </Box>
  );
}

export default RatingPage;
