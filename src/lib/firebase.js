/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* // here to import the seed file
//import { seedDatabase } from '../seed'; */

const config = {
    apiKey: "AIzaSyAy2-6PZWo-uPcX1neSzSNzF1t-wCClN_0",
    authDomain: "instagram-clone-pjt.firebaseapp.com",
    projectId: "instagram-clone-pjt",
    storageBucket: "instagram-clone-pjt.appspot.com",
    messagingSenderId: "733447526809",
    appId: "1:733447526809:web:d8189283da1875eb8fdb08"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

/* // here to call the seed file (only ONCE)
//seedDatabase(firebase); */

export { firebase, FieldValue};