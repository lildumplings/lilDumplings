import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import createAccount from './createAccount.js';
import Login from './Login.js';

function App() {
  let renderHome = () => {
    return (
      <div>
        <a href='/createAccount'>
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
        <Route path={"/createAccount"} component={createAccount} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
