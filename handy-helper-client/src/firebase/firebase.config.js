// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeQGlR-UfVmuEak-RnWFZzVBISB6sGuQ",
  authDomain: "handyhelper-e2f7f.firebaseapp.com",
  projectId: "handyhelper-e2f7f",
  storageBucket: "handyhelper-e2f7f.appspot.com",
  messagingSenderId: "485676283103",
  appId: "1:485676283103:web:b67133b01279a2f533a56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;