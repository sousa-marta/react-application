import { useContext } from 'react';
import MeetupsList from '../components/meetups/MeetupsList';
import FavoritesContext from '../store/favorites-context';

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <>
      <h1>Favorites Page</h1>
      <section>
        {favoriteContext.totalFavorites ? (
          <MeetupsList meetups={favoriteContext.favorites} />
        ) : (
          <div>You still have no favorite meetup added</div>
        )}
      </section>
    </>
  );
};

export default FavoritesPage;
