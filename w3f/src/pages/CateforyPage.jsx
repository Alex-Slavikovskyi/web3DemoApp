import { Box, FormGroup, FormLabel, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FilterCategory } from '../components/FilterCategory';
import CardFlow from '../UI/CardFlow';
import { CateforyPageContent } from '../data/CateforyPageContent';
import { filterCheckboxContent } from '../data/filterCheckboxContent';
import Container from '../components/Container';


export const CateforyPage = () => {
  const [checkedStates, setCheckedStates] = useState({
    'Account Management': false,
    'Buying crypto currency': true,
    'Cancelling your subscription': false,
    'Commenting': false,
    'Connecting Wallet': false,
    'Deleting account': false,
    'Expenses & Accounting': false,
    'General browsing': false,
    'Help & Contact': false,
    'Listing NFT': false,
    'Login': false,
    'Onboarding': false,
    'Payments & Transfers': false,
    'Portfolio & Performance': false,
    'Promotion Discovery': false,
    'Referrals': false,
    'Rewards': false,
    'Searching': false,
    'Sending currency': false,
    'Servicing & Settings': false,
    'Statements & Documents': false
  });



  const handleCheckboxChange = (name) => (event) => {
    setCheckedStates({
      ...checkedStates,
      [name]: event.target.checked,
    });
  };

  return (
    <Container>
    <Box sx={{
      paddingTop: '24px',
    }}>
      <Typography sx={{color: '#FFF', fontSize: '32px', fontWeight: 600, lineHeight: '38px',}}>
        User Flows
      </Typography>

      <Box sx={{
        display: 'flex',
        gap: '24px',
        paddingTop: '24px',
        position: 'relative',
      }}>

        {/* description section */}
        <Box sx={{
          width: '306px',
          height: '884px',
          border: '1px solid rgba(45, 57, 67, 1)',
        }}>
          <FormGroup sx={{ padding: '24px 16px' }}>
            <FormLabel component="legend"
              sx={{
                color: '#8f9498',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '20px',
                textTransform: 'uppercase',
                paddingBottom: '10px',
              }}
            >
              Filter By category
            </FormLabel>
            <FilterCategory 
              filterCheckboxContent={filterCheckboxContent}
              handleCheckboxChange={handleCheckboxChange} 
              />
          </FormGroup>
        </Box>

        {/* main section */}
        <Box sx={{
          width: '872px',
          display: 'flex',
          alignContent: 'start',
          flexWrap: 'wrap',
          gap: '26px'
        }}>
          {
            CateforyPageContent.map(card => (
              <CardFlow key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                startValue={card.startValue}
                device={card.device}
                image={card.image}
                subscription={card.subscription}
                card={card}
              />
            ))
          }
        </Box>
      </Box>
    </Box>
    </Container>
  )
}
