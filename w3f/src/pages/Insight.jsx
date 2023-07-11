import { Box, Typography } from '@mui/material';
import React from 'react';
import InsightParagraphs from '../components/InsightParagraphs';

function Insight() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#0C1115',
          width: '100vw',
          height: '415px',
          color: '#fff',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: '40px',
            fontWeight: '600',
            textAlign: 'center',
            pt: '10%',
          }}
        >
          Buying Crypto in 2023 With a Card
        </Typography>
      </Box>
      <Box
        sx={{
          color: '#b9babc',
          fontSize: '18px',
          lineHeight: '30px',
          maxWidth: '636px',
          margin: '0 auto',
        }}
      >
        <InsightParagraphs />
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: '40px',
              fontWeight: '500',
              color: '#fff',
              mb: '30px',
            }}
          >
            Binance
          </Typography>
          <img src="images/insightPage/image4.svg" />
          <Typography variant="h6" sx={{ mt: '30px' }}>
            As one of the largest cryptocurrency exchanges, Binance provides a
            seamless account replenishment process. Users can conveniently fund
            their wallets using various payment methods, including cards. The
            platform offers clear fee details and ensures a user-friendly
            experience. wallets.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Insight;
