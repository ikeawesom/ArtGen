"use client";
import { Button } from "@/components/Buttons";
import { getUserDetails } from "@/supabase/auth/handleAuth";
import { UserMetadata } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Page() {
  const [userState, setUserState] = useState(false);
  const [userInfo, setUserInfo] = useState<UserMetadata>({});

  useEffect(() => {
    async function handleUserInfo() {
      const res = await getUserDetails();
      if (res) {
        setUserInfo(res.user_metadata);
        // console.log(res.user_metadata); // first_name, last_name
      }
    }
    handleUserInfo();
  }, []);

  return (
    <div>
      <h1>
        logged in as{" "}
        <span className="font-bold">{`${userInfo.first_name} ${userInfo.last_name}`}</span>
      </h1>
      <Button
        color="bg-violet-600"
        hover="hover:opacity-80"
        duration="duration-200"
        textcolor="text-violet-50"
      >
        Log out
      </Button>
    </div>
  );
}
