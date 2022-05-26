// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPLcPDmFJJQBYM2VTjjl4bhsjzaDCBgbg",
  authDomain: "moviecommm.firebaseapp.com",
  projectId: "moviecommm",
  storageBucket: "moviecommm.appspot.com",
  messagingSenderId: "370533677132",
  appId: "1:370533677132:web:c90ebab6b952704e6fdce9",
  measurementId: "G-4TBTD65HPX"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Initialize Firebase
const db = firebase.firestore();
export {firebase, db};