import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import fb from "../config/fbconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from "firebase/auth";

const app = initializeApp(fb);

//export const db = Firestore();

const auth = getAuth(app);

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function registerAuth(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function loginAuth(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function logoutAuth() {
    return signOut(auth)
      .then(() => {
        console.log("");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user ? user.email : null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = { currentUser, registerAuth, loginAuth, logoutAuth };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
