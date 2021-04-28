//Garrett's Firebase from Project 3


//TODO: Import the firebase core module
import firebase from 'firebase/app';
//TODO: import the auth package from firebase
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyB-6pC2N1ZxwpnC_ebJ_gqRnlMO1gzCZW4",
    authDomain: "peakbagger-706c6.firebaseapp.com",
    projectId: "peakbagger-706c6",
    storageBucket: "peakbagger-706c6.appspot.com",
    messagingSenderId: "521335896187",
    appId: "1:521335896187:web:1f62018acf3a90ab8a4ade",
    //measurementId: "G-GB7RGHF9ZC"
  };


//TODO: initialize the firebase app
firebase.initializeApp(firebaseConfig);

//TODO: set up a firebase provider
const provider = new firebase.auth.GoogleAuthProvider();

//TODO: configure the firebase provider
const auth = firebase.auth();

//TODO: set up auth actions i.e. login, logout

function login () {
    auth.signInWithPopup(provider);
}

function logout() {
    auth.signOut();
}

//TODO: Export our actions
export { 
    auth,
    login,
    logout,
}