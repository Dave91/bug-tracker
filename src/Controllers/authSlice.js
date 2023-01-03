import { getAuth, onAuthStateChanged } from "firebase/auth";

export default () => {
  var loggedIn = false;
  return loggedIn;
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      loggedIn = true;
    } else {
      // User is signed out
      loggedIn = false;
    }
  });
};
