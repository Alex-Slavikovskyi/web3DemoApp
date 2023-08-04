import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';



export const InsightsCard = ({ name, data, image }) => {
  return (
    <Card
      sx={{
        width: '198px',
        height: '242px',
        backgroundColor: '#202932',
        '& .MuiCardContent-root': {
          padding: '8px 16px 36px 16px',
        } 
      }}
    >
      <CardMedia image={image} title="green iguana" sx={{ height: '134px', }} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: '#FFF',
            fontSize: '14px',
            lineHeight: '20px',
            transition: 'all 0.3s ease',
            // '&:hover': {
            //   textDecoration: 'underline',
            //   cursor: 'pointer',
            // },
          }}
          component="div"
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
            // '&:hover': {
            //   textDecoration: 'underline',
            //   cursor: 'pointer',
            // },
          }}
          component="div"
        >
          {data}
        </Typography>
      </CardContent>
    </Card>
  )
}
