import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAR-pufbjMV2SEQ6q3gLc1n-pGpczA8zYc",
  authDomain: "chatapp-2ac39.firebaseapp.com",
  projectId: "chatapp-2ac39",
  storageBucket: "chatapp-2ac39.appspot.com",
  messagingSenderId: "148932211440",
  appId: "1:148932211440:web:959f2e1d9ac38f6c824835",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storageFire = getStorage();
