import { Link } from 'react-router-dom';

export default function MainNavigation(params) {
  return <header>
    <div>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>Add New Meetups</Link>
        </li>
        <li>
          <Link to='/favorites'>My Favorites</Link>
        </li>
      </ul>
    </nav>
  </header>
}