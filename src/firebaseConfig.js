// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACFD7Vn5RK-f7rb9uCLhkMxzirlPiJZ-Q",
  authDomain: "chuli-pasteleria.firebaseapp.com",
  projectId: "chuli-pasteleria",
  storageBucket: "chuli-pasteleria.appspot.com",
  messagingSenderId: "875685149563",
  appId: "1:875685149563:web:2ff3e2e704a73f65c11bde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db 