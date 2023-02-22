
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxUeYce6jndLUlyAUbSpOthc7QHSsZxgY",
  authDomain: "emotion-89dce.firebaseapp.com",
  projectId: "emotion-89dce",
  storageBucket: "emotion-89dce.appspot.com",
  messagingSenderId: "79441147680",
  appId: "1:79441147680:web:316f693c73479b2e418945"
};


firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const storageServise = firebase.storage();


export default firebase