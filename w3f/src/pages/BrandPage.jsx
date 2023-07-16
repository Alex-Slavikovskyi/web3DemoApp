import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CardFlow from '../UI/CardFlow'
import { flowContent } from '../components/flowContent';
import StarIcon from '@mui/icons-material/Star';


export const BrandPage = ({
  startValue = "4.2"
}) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      // gap: '24px',
      paddingTop: '24px',
    }}>
      <Box sx={{
        width: '416px',
        height: '465px',
        backgroundColor: '#202932',
        padding: '46px 22px 24px 22px',
      }}>
        <Box sx={{
          display: 'flex'
        }}>
          <CardMedia
            component="img"
            alt="brand_logo"
            image="images/brandPage/brand_logo_binance.png"
            sx={{
              width: '72px',
              height: '72px',
            }}
          />
          <Box sx={{
            color: '#8f9498',
            paddingLeft: '14px'
          }}>
            <Typography variant='h6' sx={{ color: '#FFF', lineHeight: '22px' }}>
              Binance
            </Typography>
            <Typography variant='subtitle1'>
              Cryptocurrency
            </Typography>
            <Typography variant='subtitle1' sx={{ lineHeight: '28px' }}>
              Avg. Score
              <StarIcon sx={{ color: '#55E5C5', height: '17px', margin: '0 0 0 3px' }} />
              <span >{startValue} </span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          paddingTop: '34px'
        }}>
          <Typography variant='h6' sx={{ color: '#8f9498', lineHeight: '20px', fontSize: '15px', textTransform: 'uppercase' }}>
            Description
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#FFF', lineHeight: '24px', paddingTop: '10px' }}>
            Binance is a cryptocurrency exchange that lists more than 360 cryptocurrencies globally. In addition to cryptocurrency trading, it offers several services that enhance the experience for users and blockchain developers.
          </Typography>
        </Box>

        <Box sx={{
          paddingTop: '24px'
        }}>
          <Typography variant='h6' sx={{ color: '#8f9498', lineHeight: '20px', fontSize: '15px', textTransform: 'uppercase' }}>
            Journeys
          </Typography>

          <Box sx={{ display: 'flex', gap: '10px', paddingTop: '10px' }}>
            <Typography variant='body1' 
            sx={{
              color: '#55E5C5',
              lineHeight: '14px',
              padding: '10px 16px',
              backgroundColor: '#253C41',
              borderRadius: '30px'
            }}>
              Personal Investments
            </Typography>
            <Typography variant='body1' 
            sx={{ 
              color: '#55E5C5', 
              lineHeight: '14px', 
              paddingTop: '16px',
              padding: '10px 16px',
              backgroundColor: '#253C41',
              borderRadius: '30px'
              }}>
              Crypto Wallets
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px', paddingTop: '6px' }}>
            <Typography variant='body1' 
            sx={{
              color: '#55E5C5',
              lineHeight: '14px',
              padding: '10px 16px',
              backgroundColor: '#253C41',
              borderRadius: '30px'
            }}>
              Crypto Exchanges
            </Typography>
            <Typography variant='body1' 
            sx={{ 
              color: '#55E5C5', 
              lineHeight: '16px', 
              paddingTop: '14px',
              padding: '10px 16px',
              backgroundColor: '#253C41',
              borderRadius: '30px'
              }}>
              Servicing & Settings
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        width: '872px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '21px'
      }}>
        {
          flowContent.map(card => (
            <CardFlow key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              startValue={card.startValue}
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
