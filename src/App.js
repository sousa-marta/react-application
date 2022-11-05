import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeeup';

import Layout from './components/layout/Layout';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<AllMeetupsPage />} />
        <Route path={routes.newMeeup} element={<NewMeetupPage />} />
        <Route path={routes.favorites} element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
