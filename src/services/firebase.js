
//TODO: Import the firebase core module
import firebase from 'firebase/app';
//TODO: import the auth package from firebase
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyALlAbsYMW_71N4BGYjhzc8zT9VfEJitIU",
    authDomain: "gradebook-f94da.firebaseapp.com",
    projectId: "gradebook-f94da",
    storageBucket: "gradebook-f94da.appspot.com",
    messagingSenderId: "222203110555",
    appId: "1:222203110555:web:fb869d441cc790d915123e",
    measurementId: "G-5W1MQ9X77X"
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