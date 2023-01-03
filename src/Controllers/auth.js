import api_key from "./api";
import db_conn from "./db";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: api_key,
  authDomain: "bug-tracker-25b12.firebaseapp.com",
  projectId: "bug-tracker-25b12",
  storageBucket: "bug-tracker-25b12.appspot.com",
  messagingSenderId: "637774926850",
  appId: "1:637774926850:web:53da46dd791c7ad9cdc31b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
