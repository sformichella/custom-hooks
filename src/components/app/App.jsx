import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import DetailPage from '../pages/DetailPage/DetailPage';

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route
              path = "/"
              exact
              render = {routerProps => <Home {...routerProps}/>}
            />
            <Route
              path = "/:id"
              exact
              render = {routerProps => <Details {...routerProps}/>}
            />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
