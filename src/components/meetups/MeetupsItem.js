import { useContext } from 'react';
import classes from './MeetupsItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

const MeetupsItem = ({ meetup }) => {
  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.isFavorite(meetup.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) favoritesContext.removeFavorite(meetup.id);
    else favoritesContext.addFavorite(meetup);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {!itemIsFavorite ? 'ADD TO FAVORITES' : 'REMOVE FROM FAVORITES'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupsItem;
