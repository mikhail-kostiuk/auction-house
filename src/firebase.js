import firebaseConfig from "./config/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// firebaseConfig contains sensitive data that should not be exposed to the public
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export default firebase;
