 import firebase from 'firebase'
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBI74lOQK9ZbTWDi7ukfc75jYfh1Qq9NAU",
    authDomain: "login2-d5a21.firebaseapp.com",
    databaseURL: "https://login2-d5a21.firebaseio.com",
    projectId: "login2-d5a21",
    storageBucket: "login2-d5a21.appspot.com",
    messagingSenderId: "988689486254",
    appId: "1:988689486254:web:72fb75923c6c587c90783f",
    measurementId: "G-VJ733YEG0P"
  };
  // Initialize Firebase
  
  const fireb = firebase.initializeApp(firebaseConfig);

  export default fireb;