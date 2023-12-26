// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ6chGTnBkhyeScBoNLQDZPJKRQroW6vY",
  authDomain: "clonefacebook2004-49ba2.firebaseapp.com",
  databaseURL: "https://clonefacebook2004-49ba2-default-rtdb.firebaseio.com",
  projectId: "clonefacebook2004-49ba2",
  storageBucket: "clonefacebook2004-49ba2.appspot.com",
  messagingSenderId: "961471888130",
  appId: "1:961471888130:web:488eb2c0a416c1b97d601b",
  measurementId: "G-D6JHJEDT72"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export  const auth = firebase.auth();
export  const   firestore = firebase.firestore();