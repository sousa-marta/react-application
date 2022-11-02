import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import FavoritesContext from '../../store/favorites-context';

import classes from './Navbar.module.css';

const Navbar = () => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={routes.home}>All Meetups</Link>
          </li>
          <li>
            <Link to={routes.newMeeup}>Add New Meetups</Link>
          </li>
          <li>
            <Link to={routes.favorites}>
              My Favorites
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
