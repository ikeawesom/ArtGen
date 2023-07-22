"use client";
import { ReactNode, useEffect, useState } from "react";

interface sideBarProps {
  state: boolean;
  hideMenu: () => void;
}
export function SideBar({ state, hideMenu }: sideBarProps) {
  const [curPage, setCurPage] = useState("");

  useEffect(() => {
    setCurPage(window.location.pathname);
  }, []);

  return (
    <div
      className={`flex-1 sm:relative min-h-screen bg-violet-900 absolute sm:p-5 duration-200 ease-in-out -translate-x-full ${
        state ? "translate-x-0 shadow-2xl z-20" : ""
      } sm:translate-x-0 sidebar shadow-sm`}
    >
      <div className="w-full grid place-items-center mt-5">
        <img
          src="/icons/icon_back.svg"
          className="sm:hidden block"
          alt=""
          width={50}
          onClick={hideMenu}
        />
      </div>
      <a
        href="/"
        className="flex gap-4 items-center justify-center p-[1rem] mb-8 hover:brightness-125 duration-150"
      >
        <img src="/favicon.svg" alt="" width={40} />
        <h1 className="text-3xl hidden xl:block">
          <span className="gradient">ArtGen</span>
        </h1>
      </a>
      <ul className="text-violet-50">
        <a href="/account/dashboard">
          <li className={curPage.includes("dashboard") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_dashboard.svg" />
            </span>
            <span className="text">Dashboard</span>
          </li>
        </a>
        <a href="/account/projects">
          <li className={curPage.includes("projects") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_suitcase.svg" />
            </span>
            <span className="text">Projects</span>
          </li>
        </a>
        <a href="/account/posts">
          <li className={curPage.includes("posts") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_camera.svg" />
            </span>
            <span className="text">Posts</span>
          </li>
        </a>
        <a href="/community">
          <li>
            <span>
              <img src="/icons/icon_social.svg" />
            </span>
            <span className="text">Community</span>
          </li>
        </a>
        <a href="/account/settings">
          <li className={curPage.includes("settings") ? "bg-violet-500" : ""}>
            <span>
              <img src="/icons/icon_settings.svg" />
            </span>
            <span className="text">Settings</span>
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

interface accountBarProps {
  displayMenu: () => void;
}

export function AccountBar({ displayMenu }: accountBarProps) {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    async function handleUserInfo() {
      const { user, error } = await getUserDetails();
      // console.log(user);
      if (user) {
        setUserInfo(user.user_metadata);
        // console.log("Metadata:", user.user_metadata);
      } else {
        window.location.href = "/account";
      }
      // console.log(res.user_metadata); // first_name, last_name
    }
    handleUserInfo();
  }, []);

  function showNotifs() {
    alert("Notifs");
  }
  function showAccMenu() {
    alert(userInfo);
  }
  function showHelpMenu() {
    alert("Help");
  }
  return (
    <div className="flex items-center justify-between sm:justify-end bg-white shadow-md px-8 py-3 z-20">
      <img
        className="sm:hidden block"
        src="/icons/icon_menu.svg"
        alt=""
        width={20}
        onClick={displayMenu}
      />
      <div className="flex gap-4 items-center justify-center">
        <h1>
          <span className="font-bold">{`${
            userInfo.first_name
              ? `${userInfo.first_name} ${userInfo.last_name}`
              : "..."
          }`}</span>
        </h1>
        {/* <LogOutButton /> */}
        <BarButton
          icon="docs"
          onClick={() => {
            window.location.href = "/docs";
          }}
        />
        <BarButton icon="help" onClick={() => showHelpMenu()} />
        <BarButton icon="bell" onClick={() => showNotifs()} />
        <BarButton icon="user" onClick={() => showAccMenu()} />
      </div>
    </div>
  );
}

interface barButtonProps {
  icon: string;
  onClick: () => void;
}

function BarButton({ icon, onClick }: barButtonProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:opacity-80 duration-200"
    >
      <img src={`/icons/icon_${icon}.svg`} alt={icon} width={35} />
    </div>
  );
}

interface dashboardProps {
  children: ReactNode;
  className?: string;
}

export function Dashboard({ children, className }: dashboardProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={className}>
      <SideBar state={visible} hideMenu={() => setVisible(!visible)} />
      <div className="xl:w-5/6 sm:w-11/12 w-full flex-5 bg-violet-50">
        <AccountBar displayMenu={() => setVisible(!visible)} />
        <div className="min-h-screen bg-violet-50">{children}</div>
      </div>
    </div>
  );
}
