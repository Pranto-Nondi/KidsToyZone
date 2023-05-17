// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4SvVmnFfNIiAxDXWhJJ4LPsbl8seRHC0",
    authDomain: "kid-toy-zone-client.firebaseapp.com",
    projectId: "kid-toy-zone-client",
    storageBucket: "kid-toy-zone-client.appspot.com",
    messagingSenderId: "448802620864",
    appId: "1:448802620864:web:6b43c247599dac41d9b425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app