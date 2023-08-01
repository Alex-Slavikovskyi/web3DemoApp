

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';


const CardContentStyle = styled(CardContent)(({ theme }) => ({
  '& .MuiCardContent': {
    paddingBottom: 0,
  }
}))




export const InsightsCard = ({ name, data, image }) => {
  return (
    <Card
      sx={{
        width: '198px',
        // height: '300px',
        backgroundColor: '#202932',
      }}
    >
      <CardMedia image={image} title="green iguana" sx={{height: '134px',}}/>
      <CardContentStyle>
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

      </CardContentStyle>
    </Card>



    
  )
}
