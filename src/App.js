import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import Account from './Account.js';

function App() {
  let renderHome = () => {
    return (
      <div>
        This is the home!
      </div>
    );
  }

  return (
    <div className="App">
      <a href='/Account'>
        <button>Here</button>
      </a>
      <Switch>
        <Route exact path={"/"} render={renderHome} />
        <Route path={"/Account"} component={Account} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
