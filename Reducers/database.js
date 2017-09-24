import * as firebase from 'firebase'
// import database from '../App'


const firebaseConfig = {
  apiKey: "AIzaSyBDCMXQqHx4E9DKRjNE7eVzOIR11wF3ehI",
  authDomain: "rumblr-f1dad.firebaseapp.com",
  databaseURL: "https://rumblr-f1dad.firebaseio.com",
  storageBucket: "rumblr-f1dad.appspot.com",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default database = firebaseApp.database()