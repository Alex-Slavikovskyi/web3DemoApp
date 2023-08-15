import { Box, Typography } from '@mui/material'
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export const DescriptionVideo = () => {
  return (
    <Box
      sx={{
        marginTop: '24px',
        padding: '24px',
        backgroundColor: '#202932',
        maxWidth: '856px',
        color: '#FFF',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '16px',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontSize: '15px', lineHeight: '20px' }}>
            Overall score
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'end' }}>
            <StarIcon
              sx={{
                color: '#55E5C5',
                height: '24px',
                width: '24px',
                marginRight: '7px'
              }}
            />
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '28px',
              }}
            >
              4.8/5
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '20px',
                paddingLeft: '10px',
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }
              }}
            >
              How we calculate?
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '63px' }}>
          <Box>
            <Typography variant="h6" sx={{ fontSize: '14px', lineHeight: '20px' }}>
              Usability
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'end' }}>
              <StarIcon
                sx={{
                  color: '#55E5C5',
                  height: '20px',
                  width: '20px',
                  margin: '0 4px 0 0',
                }}
              />
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                }}
              >
                4/5
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontSize: '14px', lineHeight: '20px' }}>
              Utility
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'end' }}>
              <StarIcon
                sx={{
                  color: '#55E5C5',
                  height: '20px',
                  width: '20px',
                  margin: '0 4px 0 0',
                }}
              />
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                }}
              >
                5/5
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontSize: '14px', lineHeight: '20px' }}>
              Visual design
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'end' }}>
              <StarIcon
                sx={{
                  color: '#55E5C5',
                  height: '20px',
                  width: '20px',
                  margin: '0 4px 0 0',
                }}
              />
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                }}
              >
                5/5
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
      >
        Binance provides their new users with a smooth and easy-to-navigate onboarding experience, guiding them through the KYC and ID verification processes. We like their use of a one-question-per-page approach to onboarding that allows users to focus on one aspect at a time without getting overwhelmed. Unique visuals that are ever-present in the Binance app give the platform a high aesthetic appeal while also doing a great job of keeping users engaged and providing an opportunity for Binance to highlight important information for new users. Lack of feedback keeps the user unaware of current state and how many steps left until the end. Bu still the clean visual design, combined with a friendly tone of voice, easily digestible content and a simple process to progress through, makes this one of the best-in-class example of an onboarding user experience.
      </Typography>
    </Box>
  )
}
