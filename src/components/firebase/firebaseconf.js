import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAA9rmv78IXEXyiUBhP6FWBOfDiGy12k_Q",
  authDomain: "ticket-booking-7223f.firebaseapp.com",
  projectId: "ticket-booking-7223f",
  storageBucket: "ticket-booking-7223f.appspot.com",
  messagingSenderId: "1067193310038",
  appId: "1:1067193310038:web:506eb7cd4b8a2a1bafd4f7",
  measurementId: "G-N974X0DN49"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const storage=getStorage(app);
const provider = new GoogleAuthProvider()

export {storage,auth,provider}; 