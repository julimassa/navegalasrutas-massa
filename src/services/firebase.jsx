// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGTWU2boFxqvo75LxpwV7VDIGSMoSuuxI",
  authDomain: "braixareact.firebaseapp.com",
  projectId: "braixareact",
  storageBucket: "braixareact.firebasestorage.app",
  messagingSenderId: "224458966540",
  appId: "1:224458966540:web:0cf4e389f402fb1de9d029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app; 
