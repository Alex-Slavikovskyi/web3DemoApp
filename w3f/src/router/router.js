import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App.js'
import { HomePage } from '../pages/HomePage.jsx';
import { Brand } from '../pages/Brand.jsx';
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
        element: <Brand />,
      },
      {
        path: '/rating',
        element: <RatingPage />,
      },
    ],
  },
]);
