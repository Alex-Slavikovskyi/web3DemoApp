import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';



export const InsightsCard = ({ name, data, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <Card
      sx={{
        width: '198px',
        height: '242px',
        backgroundColor: '#202932',
        '& .MuiCardContent-root': {
          padding: '8px 16px 36px 16px',
        },
      }}
    >
      <CardMedia image={image} title="green iguana" component="img" sx={{
        height: '134px',
        opacity: isHovered ? '0.5' : '1',
        cursor: 'pointer',
      }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: '#FFF',
            fontSize: '14px',
            lineHeight: '20px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textDecoration: isHovered ? 'underline' : 'none',
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '15px',
            padding: '8px 0 0 0',
            transition: 'all 0.3s ease',
          }}
          component="div"
        >
          {data}
        </Typography>

      </CardContent>
    </Card>
  )
}
