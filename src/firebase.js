import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAr--GBFzGyH-I1_HSXI09s2zOCnNi4Rac",
  authDomain: "przepisnik-d2023.firebaseapp.com",
  databaseURL: "https://przepisnik-d2023-default-rtdb.firebaseio.com",
  projectId: "przepisnik-d2023",
  storageBucket: "przepisnik-d2023.appspot.com",
  messagingSenderId: "1003139766558",
  appId: "1:1003139766558:web:af87b5bebd5637ad9e910f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  require('firebase/auth');

  export default firebase;