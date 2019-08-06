import React, { Component } from 'react';
import firebase from 'firebase/app';

class createAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
// After login 
  render() {
    return (
      <div>
        <label>
            email:
            <input type="text" name="username" onChange={this.handleChange}/>
          </label>
          <label>password:
            <input type="text" name ="password" onChange={this.handleChange}/>
          </label>

          {/* <input type="submit" value="Submit" /> */}
        <button variant="primary" style={{
          width: '400px',
          position: 'relative',
          top: '4em',
          fontSize: '28px'
        }} onClick={this.handleSignUp}
>Create Login</button>
      </div>
    );
  }
}

export default createAccount;