import { Box, Typography } from '@mui/material';
import React from 'react';
import InsightParagraphs from '../components/InsightParagraphs';
import Container from '../components/Container';
import { ProjectsDescriptopn } from '../components/ProjectsDescriptopn';
import { InsightsCard } from '../UI/InsightsCard';

export const data = [
  {
    id: 1,
    image: './images/insightPage/image4.svg',
    prevImg: './images/insightPage/video preview.svg',
    description:
      'As one of the largest cryptocurrency exchanges, Binance provides a seamless account replenishment process. Users can conveniently fund their wallets using various payment methods, including cards. The platform offers clear fee details and ensures a user-friendly experience.',
    title: 'Binance',
    starValue: '4.7',
  },
  {
    id: 2,
    image: './images/insightPage/image 5.png',
    prevImg: './images/insightPage/video preview2.svg',
    description: `The process is super easy and straightforward for the user. Users can easily replenish their account in just one window. If a user has already added a card, it takes only a couple of clicks to get it done. Plus, the platform offers preset buttons for popular replenishment amounts, making it even more convenient.
      The platform also keeps the user informed about any restrictions on the money, so users know what to expect beforehand. It's all about making things clear and user-friendly!`,
    title: 'Kraken',
    starValue: '4.7',
  },
];

export const insightsContent = [
  {
    id: 4,
    image: 'images/insightsContent/insights-4.png',
    name: 'The importance of accessibility and inclusivity',
    data: 'Jul 17, 2023',
  },

  {
    id: 6,
    image: 'images/insightsContent/insights-6.png',
    name: 'AI and Web3: The run-down',
    data: 'Jul 3, 2023',
  },
  {
    id: 7,
    image: 'images/insightsContent/insights-7.png',
    name: 'A deep dive into onboarding',
    data: 'Jun 26, 2023',
  },
];

function Insight() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#0C1115',
          height: '415px',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: '12px',
              gap: '8px',
              color: '#85888a',
              ':hover': { cursor: 'pointer' },
            }}
          >
            <img style={{}} src="./images/insightPage/arrow-left.svg" />
            <Typography>Insights</Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: '40px',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Buying Crypto in 2023 With a Card
          </Typography>
        </Box>
      </Box>
      <Container>
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
          {data.map((item) => (
            <ProjectsDescriptopn item={item} />
          ))}
          <Typography sx={{ fontSize: '24px', fontWeight: '600', mb: '16px' }}>
            Related news insights
          </Typography>
          <Box sx={{ display: 'flex', gap: '24px' }}>
            {insightsContent.map((card) => (
              <InsightsCard
                name={card.name}
                data={card.data}
                image={card.image}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Insight;
