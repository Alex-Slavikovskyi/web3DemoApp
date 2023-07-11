import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

function CardFlow({
  heder = 'Binance',
  subtitle = 'P2P Deal',
  startValue = '4.3',
}) {
  return (
    <Card
      sx={{
        width: '198px',
        height: '300px',
        backgroundColor: '#202932',
      }}
    >
      <CardMedia
        sx={{ height: '134px', backgroundColor: '#202932' }}
        image="images/flowCardsContent/Component5.svg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: '#55E5C5',
            fontSize: '13px',
            fontWeight: '600',
          }}
          component="div"
        >
          {heder}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: '#fff',
            fontSize: '15px',
            fontWeight: '500',
          }}
          component="div"
        >
          {subtitle}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            color: '#8f9498',
            fontWeight: '400',
            fontSize: '13px',
            alignItems: 'center',
          }}
        >
          <StarIcon sx={{ color: '#55E5C5', height: '17px', mb: '3px' }} />
          <span>{startValue} | Desktop</span>
        </Box>
        <Typography
          variant="p"
          sx={{
            color: '#8f9498',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '0',
          }}
        >
          Personal Investments • Crypto Wallets • Crypto Exchanges • Servicing &
          Settings
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default CardFlow;
