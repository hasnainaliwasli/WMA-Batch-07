import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXWVgeT8CL27XlsZIDqZ9ISjPyGhlPEOY",
    authDomain: "react-practice-01-dc6d9.firebaseapp.com",
    projectId: "react-practice-01-dc6d9",
    storageBucket: "react-practice-01-dc6d9.appspot.com",
    messagingSenderId: "480532374483",
    appId: "1:480532374483:web:a98df74d21f5810e4bc526",
    measurementId: "G-FVY60VVPNK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth }