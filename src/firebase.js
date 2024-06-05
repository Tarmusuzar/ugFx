import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBA3XZ9UkBN0mtJKzZNLFaCd1A9fPNjnBY",
    authDomain: "my-vue-app-8da88.firebaseapp.com",
    databaseURL: "https://my-vue-app-8da88-default-rtdb.firebaseio.com",
    projectId: "my-vue-app-8da88",
    storageBucket: "my-vue-app-8da88.appspot.com",
    messagingSenderId: "460227304896",
    appId: "1:460227304896:web:82e966b28405519eca7c25",
    measurementId: "G-5QZY6BH3CJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
