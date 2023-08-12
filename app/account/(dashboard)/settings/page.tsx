"use client";

import DangerZone from "@/components/account/DangerZone";
import Links from "@/components/account/Links";
import { Profile } from "@/components/account/Settings";
import { getUserDetails } from "@/supabase/auth/handleAuth";
import profilesDB from "@/supabase/database/handleProfiles";
import { useEffect, useState } from "react";

export default function Page() {
  const [userProfile, setUserProfile] = useState<any>();

  useEffect(() => {
    async function handleUserInfo() {
      const { user, error } = await getUserDetails();
      // console.log(user);
      if (user) {
        const res = await profilesDB.getAll();
        if (res) {
          setUserProfile(res);
        }

        // console.log("Metadata:", user.user_metadata);
      } else {
        window.location.href = "/";
      }
      // console.log(res.user_metadata); // first_name, last_name
    }
    handleUserInfo();
  }, []);
  if (userProfile)
    return (
      <div>
        <div className="flex gap-5">
          <Profile userProfile={userProfile} />
          <Links userProfile={userProfile} />
        </div>
        <DangerZone userProfile={userProfile} />
      </div>
    );
}
