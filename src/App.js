import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import createAccount from './createAccount.js';
import Login from './Login.js';


function App() {
  let renderHome = () => {
    return (
      <div>
        <a href='/login'>
          <button>Login</button>
        </a>
        <a href='/createAccount'>
          <button>Sign Up</button>
        </a>
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} render={renderHome} />
        <Route path={"/createAccount"} component={createAccount} />
        <Route path={"/login"} component={Login} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
