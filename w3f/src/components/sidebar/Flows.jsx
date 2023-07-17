import { Bolt } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

function Flows() {
  return (
    <Box
      sx={{
        padding: '24px',
        borderBottom: '1px solid  #2D3943',

        pb: '0px',
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
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          color: '#71767a',
          fontWeight: '700',
        }}
      >
        <img src="images/heder/workflow.svg" />
        <Typography sx={{ fontWeight: 'bold' }}>FLOWS</Typography>
      </Box>
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
  );
}

export default Flows;
