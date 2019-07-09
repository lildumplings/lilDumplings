import React, { Component } from 'react';
import firebase from 'firebase/app';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    }
  }

  handleSignIn(email, password) {
    this.setState({
        errorMessage: null
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => {
            console.log(err);
            this.setState({
                errorMessage: err.message
            });
        })
 }

  render() {
    return (
      <div>
        Coming Soon!
      </div>
    );
  }
}

export default Login;