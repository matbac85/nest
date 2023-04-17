import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
