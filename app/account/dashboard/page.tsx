"use client";
import { Button } from "@/components/Buttons";
import { getUserDetails } from "@/supabase/auth/handleAuth";
import { UserMetadata } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/Loading";
import { handleSignOut } from "@/supabase/auth/handleAuth";
import { addUser, getUserDBDetails } from "@/supabase/database/handleDB";
import "@/app/globals.css";

export default function Page() {
  const [userState, setUserState] = useState(false);
  const [userInfo, setUserInfo] = useState<UserMetadata>({});

  useEffect(() => {
    async function handleUserInfo() {
      const res = await getUserDetails();
      if (res) {
        const { data, error } = await getUserDBDetails(res.id);
        if (error) {
          // User does not exist OR Already added

          const error = await addUser(
            res.id,
            res.email,
            res.user_metadata.first_name,
            res.user_metadata.last_name
          );
          if (error) {
            console.log(error);
          } else {
            setUserInfo(res.user_metadata);
          }
        } else {
          data?.forEach((item, index) => {
            if (item.id === res.id) {
              console.log(data[index]);
              return;
            }
          });
        }
      }
      // console.log(res.user_metadata); // first_name, last_name
    }
    handleUserInfo();
  }, []);

  async function handleClick() {
    const res = await handleSignOut();
    if (res === "success") {
      window.location.href = "/";
    } else {
      alert(res);
    }
  }

  if (userInfo.first_name) {
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
          onClick={handleClick}
        >
          Log out
        </Button>
      </div>
    );
  }
  return <LoadingScreen />;
}