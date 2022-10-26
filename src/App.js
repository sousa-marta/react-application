import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeeup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetupPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
