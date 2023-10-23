import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACm5KPqTgzkzPV5EFnU9xGgsNgHhFmEK8",
  authDomain: "frontiersmarketfirebase.firebaseapp.com",
  projectId: "frontiersmarketfirebase",
  storageBucket: "frontiersmarketfirebase.appspot.com",
  messagingSenderId: "763159664338",
  appId: "1:763159664338:web:043bda039e057f437b7f0b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
