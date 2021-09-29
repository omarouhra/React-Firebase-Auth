// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxNgOKj9lawpO85ANSiA4PRh4QzuTEcTo",
  authDomain: "auth-demo-aa1a5.firebaseapp.com",
  projectId: "auth-demo-aa1a5",
  storageBucket: "auth-demo-aa1a5.appspot.com",
  messagingSenderId: "759950364328",
  appId: "1:759950364328:web:451db4af16022e29413c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
