import React, { Component } from 'react';
import firebase from 'firebase/app';

class createAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    }
  }
  handleSignUp(email, password, handle) {
    this.setState({
        errorMessage: null
    });
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
  render() {
    return (
      <div>
        Coming soon!
      </div>
    );
  }
}

export default createAccount;