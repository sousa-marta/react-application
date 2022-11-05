import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import FavoritesContext from '../../store/favorites-context';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';



const SiteNavbar = () => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to={routes.home}>
          React Meetups
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={routes.home}>
              All Meetups
            </Nav.Link>
            <Nav.Link as={Link} to={routes.newMeeup}>
              Add New Meetup
            </Nav.Link>
            <Nav.Link as={Link} to={routes.favorites}>
             My Favorites
              <Badge bg="light" text="dark" className="ms-2">
                {favoritesContext.totalFavorites}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
