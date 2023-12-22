
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from  'firebase/auth'
    const firebaseConfig = {
    apiKey: "AIzaSyDnMBWWzQAkOnEqnxn17DMpeH8R0hPPqW0",
    authDomain: "react-dacae.firebaseapp.com",
    projectId: "react-dacae",
    storageBucket: "react-dacae.appspot.com",
    messagingSenderId: "134945254987",
    appId: "1:134945254987:web:b22b385b32dcc1c09e27ce"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider}