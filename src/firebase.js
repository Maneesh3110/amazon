// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDTG3SydlWTUFbCVdvIKu-FbuvsF1gm_Tc",
    authDomain: "clone-80511.firebaseapp.com",
    projectId: "clone-80511",
    storageBucket: "clone-80511.appspot.com",
    messagingSenderId: "972479023769",
    appId: "1:972479023769:web:23d632ffb98907547d0608",
    measurementId: "G-L1D7SCPQWM"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}