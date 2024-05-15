import { createBrowserRouter } from 'react-router-dom';
import Matches from './src/pages/Matches';
import Layout from './src/pages/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Matches /> },
      {
        path: '*',
        element: <Matches />,
      },
    ],
  },
]);
