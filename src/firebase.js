// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp =firebase.initializeApp( {
  apiKey: "AIzaSyBN2jKhNUIPFuUwOowhLE-3Lv6F4f1EO-s",
  authDomain: "nairoberry-backend.firebaseapp.com",
  projectId: "nairoberry-backend",
  storageBucket: "nairoberry-backend.appspot.com",
  messagingSenderId: "439194875472",
  appId: "1:439194875472:web:9c7cff440b0cff128a8355",
  measurementId: "G-QLTGJ8JD2F"
})



var db = firebaseApp.firestore();
var auth = firebase.auth();
var provider= new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default {db};