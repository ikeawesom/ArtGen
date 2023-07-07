"use client";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/config";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  function handleSignUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href = "/dashboard";

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`ERROR ${errorCode}: ${errorMessage}`);
        // ..
      });
  }

  const handleForm = () => {
    handleSignUp(email, password);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      window.location.href = "/dashboard";
      // ...
    }
  });

  return (
    <div className="grid place-items-center h-screen w-full px-10 md:px-32">
      <div className="px-3 py-3 rounded-lg ring-1 ring-slate-900/10 shadow-sm">
        <form>
          <label htmlFor="email">
            <p className="text-slate-500 mb-3 text-sm">Email</p>
            <input
              className="px-3 py-3 rounded-lg ring-1 ring-slate-900/10 shadow-sm w-full mb-5"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address."
            />
          </label>
          <label htmlFor="password">
            <p className="text-slate-500 mb-3 text-sm">Password</p>
            <input
              className="px-3 py-3 rounded-lg ring-1 ring-slate-900/10 shadow-sm w-full mb-5"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password"
            />
          </label>
          <button
            className="mt-5 w-full bg-indigo-950 text-blue-50 px-7 py-3 rounded-lg hover:bg-indigo-800 focus:bg-indigo-800"
            onClick={handleForm}
            type="button"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
