"use client";

import { getAuth, Auth } from "firebase/auth";
import { use, useState } from "react";
import Alert from "../components/Alert";
import SignUp from "@/firebase/auth/SignUp";
import app from "@/firebase/config";
import AuthCheck from "@/firebase/auth/AuthCheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | ArtGen",
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(false);
  const [status, setStatus] = useState(false);

  const auth = getAuth(app);

  function checkAuth(auth: Auth) {
    const logged = AuthCheck(auth);
    if (logged) window.location.href = "/dashboard";
  }

  const handleSignUp = (email: string, password: string, auth: Auth) => {
    setStatus(true);
    setTimeout(() => {
      checkAuth(auth);
    }, 4000);
  };

  checkAuth(auth);

  return (
    <div className="grid place-items-center h-screen w-full px-10 md:px-32">
      <div className="p-4 md:p-10 rounded-lg ring-1 ring-slate-900/10 shadow-lg md:w-96 bg-white">
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
          {verify && (
            <Alert
              text={"An email verification has been sent to " + email}
              type="success"
            />
          )}
          {status && <SignUp email={email} password={password} auth={auth} />}
          <button
            disabled={verify}
            className={
              verify
                ? "mt-5 w-full px-7 py-3 rounded-lg bg-gray-500 text-gray-100"
                : "mt-5 w-full px-7 py-3 rounded-lg bg-indigo-950 text-blue-50 hover:bg-indigo-800 focus:bg-indigo-800"
            }
            onClick={() => handleSignUp(email, password, auth)}
            type="button"
          >
            {verify ? <>Redirecting...</> : <>Sign Up</>}
          </button>
        </form>
      </div>
    </div>
  );
}
