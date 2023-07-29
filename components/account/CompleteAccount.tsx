import { useEffect, useState } from "react";
import { getUserDetails } from "@/supabase/auth/handleAuth";
import profilesDB from "@/supabase/database/handleProfiles";
import "./account.css";

interface Props {
  closeAction: () => void;
}

export default function CompleteAccount({ closeAction }: Props) {
  const [incompleteTasks, setIncompleteTasks] = useState<any[]>();
  const totalTasks = 4;
  const [percent, setPercent] = useState(0);

  function handleTasks(userInformation: any) {
    var temp = [];

    if (userInformation.display_name === null)
      temp.push({
        a: "/account",
        icon: "icon_name.svg",
        name: "Display Name",
      });

    if (userInformation.profile_picture === null)
      temp.push({
        a: "/account/settings",
        icon: "icon_avatar.svg",
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
      const percent_temp = (1 - incompleteTasks.length / totalTasks) * 100;
      setPercent(percent_temp);
    }
  }, [incompleteTasks]);

  if (incompleteTasks)
    return (
      <div className="border-2 border-violet-400 rounded-md p-8 pb-5 my-5 relative bg-violet-200 notice">
        <div className="flex gap-2 items-center justify-start">
          <h1 className="font-bold text-indigo-900 text-xl">
            Spice up your account!
          </h1>
          <h4 className="text-violet-600 text-md">{percent}%</h4>
        </div>

        <div className="h-5 w-full rounded-2xl bg-slate-50 my-3 shadow-md overflow-hidden">
          <div
            className={`h-full progress-bar bg-violet-400 ${
              percent === 0
                ? "w-0"
                : percent === 25
                ? "w-1/4"
                : percent === 50
                ? "w-1/2"
                : percent === 75
                ? "w-3/4"
                : "w-full"
            }`}
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
        <img
          onClick={closeAction}
          src="/icons/icon_cross.svg"
          alt=""
          width={20}
          className="cursor-pointer hover:brightness-150 duration-150 absolute top-6 right-6"
        />
      </div>
    );
}
