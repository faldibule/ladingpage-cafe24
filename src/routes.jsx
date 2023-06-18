import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/Page404';
import Article from './pages/Article';
import Detail from './pages/Detail';

export default function Router() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '/article', element: <Article /> },
    { path: '/article/:slug', element: <Detail /> },
    { path: '*', element: <NotFound replace /> },
  ]);
}
