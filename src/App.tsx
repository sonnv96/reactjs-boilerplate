import { NotFound, PrivateRoute } from 'components/Common';
import HomePage from 'features/home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <PrivateRoute path="/admin">
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
