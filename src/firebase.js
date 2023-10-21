import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig={
    apiKey: "AIzaSyCioPn023Fi4odd4YeeCWCRr3BGgPErCG4",
    authDomain: "petfinder123456.firebaseapp.com",
    projectId: "petfinder123456",
    storageBucket: "petfinder123456.appspot.com",
    messagingSenderId: "43588044836",
    appId: "1:43588044836:web:450d08c9eeadaa057bf0b1",
    measurementId: "G-KN4WS0LBLM"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new GoogleAuthProvider();

export {db,auth,provider};