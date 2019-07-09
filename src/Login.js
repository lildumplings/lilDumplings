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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
 }
  render() {
    let enabled = (this.state.userName === "" && this.state.password === "")
    return (
      <div>
        <form>
          <input
            name="userName"
            onChange={this.handleChange}
            id="userName" />
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