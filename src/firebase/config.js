// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

console.log();
// console.log(import.meta.env.VITE_API_KEY);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDER,
    appId: import.meta.env.VITE_APP,
    measurementId: import.meta.env.VITE_MEASUREMENT,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//firebasedeki auth yapısının referansını alma
export const auth = getAuth(app);

//goole sağlayıcosının kurulumu
export const provider = new GoogleAuthProvider();


//veri tabının refaransını al
export const db = getFirestore(app);