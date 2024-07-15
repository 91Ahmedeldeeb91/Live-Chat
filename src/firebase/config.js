import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBF-6R4V3rx0cUpiQTHGaisHEM-erj15FA",
  authDomain: "udmy-vue-firebase-sites.firebaseapp.com",
  projectId: "udmy-vue-firebase-sites",
  storageBucket: "udmy-vue-firebase-sites.appspot.com",
  messagingSenderId: "992216514825",
  appId: "1:992216514825:web:94f494035ca4a734cbd3d8",
};

// int firebase
firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export { projectFirestore, timestamp, projectAuth };