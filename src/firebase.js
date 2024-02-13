import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCvSLyCNtcixt4xHx_-aUyn0rGN1zUuSMU",
  authDomain: "fir-auth-57e6c.firebaseapp.com",
  projectId: "fir-auth-57e6c",
  storageBucket: "fir-auth-57e6c.appspot.com",
  messagingSenderId: "110915621828",
  appId: "1:110915621828:web:036c6f70e8dce4f44c4a91",
  measurementId: "G-ZPS65TY2SL"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };