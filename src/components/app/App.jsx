import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import DetailPage from '../pages/DetailPage/DetailPage';

import { ThemeProvider } from '../../state/themeContext';

const App = () => {
  return (
    <>
      <ThemeProvider>
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
                render = {routerProps => <DetailPage {...routerProps}/>}
              />
            </Switch>
          </Router>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
