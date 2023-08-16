import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.js';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CssBaseline>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </CssBaseline>
);
