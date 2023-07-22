"use client";
import { useEffect, useState } from "react";

export function SideBar() {
  const [curPage, setCurPage] = useState("");
  useEffect(() => {
    setCurPage(window.location.pathname);
  }, []);
  return (
    <div className="flex-1 sm:relative w-1/6 min-h-screen bg-violet-900 absolute sm:p-5 -translate-x-full sm:translate-x-0 sidebar">
      <a
        href="/"
        className="flex gap-4 items-center justify-start p-[1rem] mb-8 hover:brightness-125 duration-150"
      >
        <img src="/favicon.svg" alt="" width={40} />
        <h1 className="text-3xl">
          <span className="gradient">ArtGen</span>
        </h1>
      </a>
      <ul className="text-violet-50">
        <a href="/account/dashboard">
          <li className={curPage.includes("dashboard") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_dashboard.svg" />
            </span>
            Dashboard
          </li>
        </a>
        <a href="/account/projects">
          <li className={curPage.includes("projects") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_suitcase.svg" />
            </span>
            Projects
          </li>
        </a>
        <a href="/account/posts">
          <li className={curPage.includes("posts") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_camera.svg" />
            </span>
            Posts
          </li>
        </a>
        <a href="/community">
          <li>
            <span>
              <img src="/icons/icon_social.svg" />
            </span>
            Community
          </li>
        </a>
        <a href="/account/settings">
          <li className={curPage.includes("settings") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_settings.svg" />
            </span>
            Settings
          </li>
        </a>
      </ul>
    </div>
  );
}
import { getUserDetails, handleSignOut } from "@/supabase/auth/handleAuth";
import { Button } from "../Buttons";

export function LogOutButton() {
  async function handleClick() {
    const res = await handleSignOut();
    if (res !== "success") alert(res);
    if (res === "success") window.location.href = "/account";
  }
  return (
    <Button
      color="bg-white"
      hover="hover:bg-slate-50"
      shadow="shadow-lg"
      padding="p-2"
      duration="duration-200"
      textcolor="text-violet-50"
      onClick={handleClick}
      round="rounded-full"
    >
      <img src="/icons/icon_power.svg" alt="" width={30} />
    </Button>
  );
}

export function AccountBar() {
  const [userInfo, setUserInfo] = useState<any>({});

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
  return (
    <div className="flex-1 flex gap-5 items-center justify-center">
      <h1>
        <span className="font-bold">{`${
          userInfo.first_name
            ? `${userInfo.first_name} ${userInfo.last_name}`
            : "..."
        }`}</span>
      </h1>
      <LogOutButton />
    </div>
  );
}

export function Dashboard() {
  return <h1>dashboard</h1>;
}
