import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGjN3lz1Ef4U8G2R-1SBoRnNLfOys4Ax0",
    authDomain: "mycourseproject-d6586.firebaseapp.com",
    projectId: "mycourseproject-d6586",
    storageBucket: "mycourseproject-d6586.appspot.com",
    messagingSenderId: "295496278206",
    appId: "1:295496278206:web:b47 d6f0fbc45196a327eef",
    measurementId: "G-0LBHCG1NCF"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth(); 
const provider= new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()
export  {storage, firebase}
export{auth,provider};
export default db;

