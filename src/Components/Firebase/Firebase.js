import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJrJKXGzd-m8jezBNHHZ8kq7ceT5peTFU",
    authDomain: "eshop-ae687.firebaseapp.com",
    projectId: "eshop-ae687",
    storageBucket: "eshop-ae687.appspot.com",
    messagingSenderId: "431428505799",
    appId: "1:431428505799:web:ba0dd0bd7fe392d4746ee2",
    measurementId: "G-0MCN6SMHSC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };