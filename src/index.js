import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
require('dotenv').config()

const api_key = "AIzaSyCIax8-G3UeqreR0F_S1lGwSuMVKUlwFwg"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: api_key,
    authDomain: "test-project-49bc7.firebaseapp.com",
    databaseURL: "https://test-project-49bc7.firebaseio.com",
    projectId: "test-project-49bc7",
    storageBucket: "test-project-49bc7.appspot.com",
    messagingSenderId: "707416577639",
    appId: "1:707416577639:web:1afbbdd001929f53"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
