"use client";

import {
  FormContainer,
  AccountForm,
  Display,
} from "@/components/account/Account";
import Circle from "@/components/utilities/Circle";
import "@/components/account/account.css";
import { useEffect, useState } from "react";
import supabase from "@/supabase/config";
import LoadingScreen from "@/components/Loading";

export default function Page() {
  const [logIn, setLogIn] = useState(false);
  const [sess, setSess] = useState(false);

  useEffect(() => {
    async function LoggedIn() {
      const { data, error } = await supabase.auth.getSession();

      console.log(`[CLIENT] ${data.session?.user}`);
      if (data.session) {
        setSess(true);
        window.location.href = "/account/dashboard";
      }
    }
    LoggedIn();
  }, []);

  const handleSwitchForm = () => {
    setLogIn(!logIn);
  };

  if (!sess) {
    return (
      <div className="min-h-screen overflow-hidden">
        <a href="/community">
          <div className="heading sm:hover:top-8 hover:bg-slate-50 duration-200 bg-white flex gap-2 items-center justify-center select-none w-fit px-5 py-2 shadow-lg rounded-md absolute sm:top-5 sm:left-1/2 sm:-translate-x-1/2 z-20">
            <img src="/favicon.svg" alt="ArtGen" width={50} />
            <div>
              <h1 className="text-3xl m-0 p-0">
                <span className="gradient">ArtGen</span>
              </h1>
              <p className="m-0 p-0 text-sm">Community</p>
            </div>
          </div>
        </a>

        <div className="flex h-full main-container">
          <FormContainer className="bg-gradient-to-b from-violet-200 to-cyan-200 relative sub-container">
            <Circle color="bg-green-200 z-0" position="bottom-10 left-10" />
            <Circle color="bg-pink-300 z-0" position="top-10 right-10" />
            <Display />
          </FormContainer>
          <FormContainer className="sub-container">
            {!logIn && (
              <AccountForm
                title="Create an account"
                user={false}
                onClick={handleSwitchForm}
              />
            )}
            {logIn && (
              <AccountForm
                title="Log in"
                user={true}
                onClick={handleSwitchForm}
              />
            )}
          </FormContainer>
        </div>
      </div>
    );
  }
  return <LoadingScreen text="Redirecting to dashboard..." />;
}
