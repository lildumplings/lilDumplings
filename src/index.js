import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const api_key = process.env.REACT_APP_FIREBASE_API_KEY;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: api_key,
    authDomain: "test-project-49bc7.firebaseapp.com",
    databaseURL: "https://test-project-49bc7.firebaseio.com",
    projectId: "test-project-49bc7",
    storageBucket: "",
    messagingSenderId: "707416577639",
    appId: "1:707416577639:web:1afbbdd001929f53"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
