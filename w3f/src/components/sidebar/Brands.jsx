import { Box, Typography } from '@mui/material';
import React from 'react';

function Brands() {
  return (
    <Box sx={{ mb: '24px' }}>
      <Box
        sx={{
          ml: '30px',
          color: '#71767a',
          fontWeight: '700',
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>BRANDS</Typography>
      </Box>

      <Box
        sx={{
          paddingLeft: '24px',
          paddingRight: '24px',
          overflow: 'scroll',
          height: 'calc(50vh - 110px)',

          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
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
    </Box>
  );
}

export default Brands;
