import { Auth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthCheck(auth: Auth) {
  let res;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      res = true;
      // ...
    }
    res = false;
  });
  return res;
}
