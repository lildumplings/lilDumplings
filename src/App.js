import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import Account from './Account.js';

function App() {
  let renderHome = () => {
    return (
      <div>
        <a href='/Account'>
          <button>Login</button>
        </a>
       <button>Sign Up</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} render={renderHome} />
        <Route path={"/Account"} component={Account} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
