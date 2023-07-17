import { Box, Typography } from '@mui/material';
import React from 'react';

function Brands() {
  return (
    <Box
      sx={{
        padding: '24px',
        borderBottom: '1px solid  #2D3943',
        pb: '0px',

        '& ul li': {
          lineHeight: 'none',
          transition: 'all 0.3s ease',
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
        <Typography sx={{ fontWeight: 'bold' }}>BRANDS</Typography>
      </Box>
      <ul style={{ listStyle: 'none', padding: '0px' }}>
        <li>1inch</li>
        <li>Ambire Wallet</li>
        <li>AtomicHub</li>
        <li>Axie Marketplace</li>
        <li>Binance</li>
        <li>Bitfinex</li>
        <li>BitGo</li>
        <li>BitKeep</li>
        <li>Bittrex</li>
        <li>Blur</li>
        <li>Chronos</li>
        <li>Coinbase</li>
        <li>CoinDCX</li>
        <li>Coinomi</li>
        <li>CoinPayments</li>
        <li>Crypto.com</li>
        <li>CryptoPunks</li>
        <li>CyberConnect</li>
        <li>Electrum</li>
        <li>Enno Wallet</li>
        <li>Exodus</li>
        <li>Fxhash</li>
        <li>Gate.io</li>
        <li>Gemini</li>
        <li>HollaEx</li>
        <li>JPG store</li>
        <li>Kraken</li>
        <li>Kucoin</li>
        <li>LooksRare</li>
        <li>Luno</li>
        <li>Magic Eden</li>
        <li>Magic Square</li>
        <li>MetaMask</li>
        <li>Minted</li>
        <li>Mobox</li>
        <li>OKX</li>
        <li>OpenSea</li>
        <li>Ordinals Wallet</li>
        <li>Parallax</li>
        <li>PrimeXBT</li>
        <li>ThetaDrop</li>
        <li>Trezor</li>
        <li>Trust Wallet</li>
        <li>UniSat</li>
        <li>Variable</li>
        <li>WhiteBit</li>
        <li>Zengo Wallet</li>
        <li>Zuse Market</li>
        <li>X2Y2</li>
      </ul>
    </Box>
  );
}

export default Brands;
