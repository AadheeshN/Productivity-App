import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBPtM2Q2FydgNafpTkt6aKcyCySNOIUTrI",
    authDomain: "productivity-guider.firebaseapp.com",
    projectId: "productivity-guider",
    storageBucket: "productivity-guider.appspot.com",
    messagingSenderId: "428281515215",
    appId: "1:428281515215:web:772850b2c0d39e97f57bba"
  };

  if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase.firestore();