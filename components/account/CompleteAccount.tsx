"use client";
import { useEffect, useState } from "react";
import { getUserDetails } from "@/supabase/auth/handleAuth";
import profilesDB from "@/supabase/database/handleProfiles";
import "./account.css";

export default function CompleteAccount() {
  const [incompleteTasks, setIncompleteTasks] = useState<any[]>();
  const totalTasks = 4;
  const [percent, setPercent] = useState(0);

  function handleTasks(userInformation: any) {
    var temp = [];

    if (userInformation.display_name === null)
      temp.push({
        a: "/account",
        icon: "icon_avatar.svg",
        name: "Display Name",
      });

    if (userInformation.profile_picture === null)
      temp.push({
        a: "/account/settings",
        icon: "icon_name.svg",
        name: "Profile Picture",
      });

    if (userInformation.github_url === null)
      temp.push({
        a: "/account/settings/links",
        icon: "icon_github.svg",
        name: "Link your GitHub",
      });

    if (userInformation.linkedin_url === null)
      temp.push({
        a: "/account/settings/links",
        icon: "icon_linkedin.svg",
        name: "Link your Linkedin",
      });

    setIncompleteTasks(temp);
  }

  useEffect(() => {
    async function getDetails() {
      const { user, error } = await getUserDetails();
      if (user) {
        const res = await profilesDB.getSpecific("*", "id", user.id);
        if (res) handleTasks(res[0]);
      }
    }
    getDetails();
  }, []);

  useEffect(() => {
    if (incompleteTasks) {
      const percent_temp = (1 - incompleteTasks.length / totalTasks) * 100 + 50;
      setPercent(percent_temp);
    }
  }, [incompleteTasks]);

  if (incompleteTasks)
    return (
      <div>
        <div className="flex gap-2 items-center justify-start">
          <h1 className="font-bold text-indigo-900">
            Finish setting up your account
          </h1>
          <h4 className="text-violet-600 text-sm">{percent}%</h4>
        </div>

        <div className="h-5 w-full rounded-lg bg-slate-50 my-3 shadow-md overflow-hidden">
          <div
            className={`h-5 progress-bar bg-violet-400 w-[${percent}%]`}
          ></div>
        </div>
        <ul className="flex gap-3 overflow-x-auto pr-3 py-3">
          {incompleteTasks.map((item: any) => (
            <a
              key={item.name}
              href={item.a}
              className="relative p-3 rounded-md shadow-sm bg-white h-32 w-48 hover:shadow-md duration-150 complete-account-tab"
            >
              <li className="flex items-end justify-start  h-full">
                <img
                  src={`/icons/account/${item.icon}`}
                  className="absolute top-4 right-4"
                  alt=""
                  width={30}
                  height={30}
                />
                <h3 className="bottom-2 left-2">{item.name}</h3>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
}
