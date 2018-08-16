import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import * as firebase from 'firebase';
// import {FIREBASE_API, FIREBASE_AUTH, FIREBASE_DB, FIREBASE_BUCKET} from 'react-native-dotenv';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkkeWXV3vIlhdQIrCpAn9mfGqFXG81NbQ",
  authDomain: "sprint-3-ppl.firebaseapp.com",
  databaseURL: "https://sprint-3-ppl.firebaseio.com",
  storageBucket: "sprint-3-ppl.appspot.com"
};
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
      return (
        <AppNavigator />
      );
  }
}