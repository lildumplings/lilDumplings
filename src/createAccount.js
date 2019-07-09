import React, { Component } from 'react';
import firebase from 'firebase/app';

class createAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  handleSignUp(email, password, handle) {
    this.setState({
        errorMessage: null
    });
    
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
        .then((firebaseUser) => {
            let user = firebase.auth().currentUser;
            let promise = user.updateProfile({
                displayName: handle,
            })
            return promise;
        })
        .then(() => console.log("done"))
        .catch((error) => {
            this.setState({
                errorMessage: error.message
            });
        })
  }
// After login 
  render() {
    return (
      <div>
        <button variant="primary" style={{
          width: '400px',
          position: 'relative',
          top: '4em',
          fontSize: '28px'
        }}
>Create Login</button>
      </div>
    );
  }
}

export default createAccount;