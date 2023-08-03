import { Box, Typography } from '@mui/material';
import React from 'react';

function Flows() {
  return (
    <Box sx={{ mb: '24px' }}>
      <Box
        sx={{
          paddingTop: '24px',
          ml: '30px',
          color: '#71767a',
          fontWeight: '700',
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>FLOWS</Typography>
      </Box>
      <Box
        sx={{
          paddingLeft: '24px',
          paddingRight: '24px',
          borderBottom: '1px solid  #2D3943',
          overflow: 'scroll',
          height: '471px',

          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box
          sx={{
            '& ul li': {
              transition: 'all 0.3s ease',
              lineHeight: 'none',
              padding: '8px',
              '&:hover': {
                cursor: 'pointer',
                color: '#55E5C5',
              },
            },
          }}
        >
          <ul style={{ listStyle: 'none', padding: '0px' }}>
            <li>Account Management</li>
            <li>Buying crypto currency</li>
            <li>Cancelling your subscription</li>
            <li>Commenting</li>
            <li>Connecting Wallet</li>
            <li>Deleting account</li>
            <li>Expenses & Accounting</li>
            <li>General browsing</li>
            <li>Help & Contact</li>
            <li>Listing NFT</li>
            <li>Login</li>
            <li>Onboarding</li>
            <li>Payments & Transfers</li>
            <li>Portfolio & Performance</li>
            <li>Promotion Discovery</li>
            <li>Referrals</li>
            <li>Rewards</li>
            <li>Savings Goals & Pots</li>
            <li>Searching</li>
            <li>Sending currency</li>
            <li>Servicing & Settings</li>
            <li>Statements & Documents</li>
            <li>Transactions Overview</li>
            <li>Upgrading account</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Flows;
