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
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HoverStyled = styled(CardMedia)((props) => ({
  position: 'relative',
  height: '134px',
  backgroundColor: '#202932',
  transition: 'all 0.3s ease',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#202932',
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: '12',
      top: 'calc(50% - 14px)',
      left: 'calc(50% - 14px)',
      width: '28px',
      height: '28px',
      backgroundImage: `url('images/flowCardsContent/playbutton.svg')`,

      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: '10',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .3)',
    },
  },
}));

function CardFlow({ title, subtitle, startValue, image, subscription, h }) {
  return (
    <Card
      sx={{
        width: '198px',
        height: '270px',
        backgroundColor: '#202932',
        '& .MuiCardContent-root': {
          padding: '8px 16px 16px 16px',
        }
      }}
    >
      <Link to="/video">
        <HoverStyled image={image} title="green iguana" />
      </Link>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: '#55E5C5',
            fontSize: '13px',
            lineHeight: '15px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          }}
          component="div"
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: '#fff',
            fontSize: '15px',
            lineHeight: '19px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
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
            lineHeight: '15px',
            alignItems: 'center',
          }}
        >
          <StarIcon sx={{ color: '#55E5C5', height: '17px', mb: '3px' }} />
          <span>{startValue}</span>
        </Box>

        {subscription.split('•').map((item, index, array) => (
          <React.Fragment key={item}>
            <Typography
              variant="p"
              sx={{
                color: '#8f9498',
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '14px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  cursor: 'pointer',
                  color: '#fff',
                },
              }}
            >
              {item}
            </Typography>
            {index !== array.length - 1 && (
              <span style={{ color: '#8f9498' }}>•</span>
            )}
          </React.Fragment>
        ))}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default CardFlow;
