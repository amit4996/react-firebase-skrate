import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDuGkxHpBqUCFHihO3-yXr-vHiI_AbbDSo",
    authDomain: "assignment-2f77e.firebaseapp.com",
    projectId: "assignment-2f77e",
    storageBucket: "assignment-2f77e.appspot.com",
    messagingSenderId: "417678960845",
    appId: "1:417678960845:web:8c60a318e4c9e83cca6184"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);