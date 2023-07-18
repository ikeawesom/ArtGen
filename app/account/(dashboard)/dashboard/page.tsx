"use client";
import { Button } from "@/components/Buttons";
import { getUserDetails } from "@/supabase/auth/handleAuth";
import { User, UserMetadata } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/Loading";
import { handleSignOut } from "@/supabase/auth/handleAuth";
import supabase from "@/supabase/config";
import "@/app/globals.css";

export default function Page() {
  const [userState, setUserState] = useState(false);
  const [userInfo, setUserInfo] = useState<UserMetadata>({});

  useEffect(() => {
    async function handleUserInfo() {
      const { user, error } = await getUserDetails();
      // console.log(user);
      if (user) {
        setUserInfo(user.user_metadata);
        console.log("Metadata:", user.user_metadata);
      } else {
        window.location.href = "/account";
      }
      // console.log(res.user_metadata); // first_name, last_name
    }
    handleUserInfo();
  }, []);

  async function handleClick() {
    const res = await handleSignOut();
    if (res !== "success") alert(res);
    if (res === "success") window.location.href = "/account";
  }

  if (userInfo.first_name) {
    return (
      <div className="flex w-full">
        <div className="flex-1 w-1/5 flex gap-5 items-center justify-center">
          <h1>
            <span className="font-bold">{`${userInfo.first_name} ${userInfo.last_name}`}</span>
          </h1>
          <Button
            color="bg-violet-600"
            hover="hover:opacity-80"
            duration="duration-200"
            textcolor="text-violet-50"
            onClick={handleClick}
          >
            Log out
          </Button>
        </div>
      </div>
    );
  }
  return <LoadingScreen />;
}
