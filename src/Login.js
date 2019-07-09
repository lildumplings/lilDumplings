import React, { Component } from 'react';
import firebase from 'firebase/app';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    }
  }

  // With the username and password set within the state, firebase will check and login to their account.
  handleSignIn() {
    this.setState({
      errorMessage: null
    });

    firebase.auth().signInWithEmailAndPassword(this.state.userName, this.state.password)
        .catch((err) => {
            console.log(err);
            this.setState({
                errorMessage: err.message
            });
        })
  }
  
 // When the user inputs their username and password into the input boxes the state will automatically update with their information
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  // this is after the login button is selected
  render() {
    let enabled = (this.state.userName === "" && this.state.password === "");
    return (
      <div>
        <form>
          {/* User adds email */}
          <input
            name="userName"
            onChange={this.handleChange}
            id="userName" />
          {/* User inputs password */}
          <input
            name="password"
            onChange={this.handleChange}
            id="fname" />
          <button disable={!enabled} onClick={this.handleSignIn}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;