import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App.js'
import { HomePage } from '../pages/HomePage.jsx';
import { BrandPage } from '../pages/BrandPage.jsx';
import RatingPage from '../pages/RatingPage.jsx';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/brand',
        element: <BrandPage />,
      },
      {
        path: '/rating',
        element: <RatingPage />,
      },
    ],
  },
]);
