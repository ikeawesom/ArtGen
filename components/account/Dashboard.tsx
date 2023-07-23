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
      className={`sm:sticky sm:self-start left-0 top-0 bottom-0 flex-1 z-20 h-full min-h-screen bg-violet-900 fixed sm:p-5 duration-200 ease-in-out -translate-x-full ${
        state ? "translate-x-0 shadow-2xl" : ""
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
import { User } from "@supabase/supabase-js";

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

interface accountModalProps {
  userInfo: any;
  user: User | undefined;
}

function AccountModal({ userInfo, user }: accountModalProps) {
  return (
    <div className="modal account">
      <ul>
        <li>
          <h1>
            <span className="font-bold">{`${
              userInfo.first_name
                ? `${userInfo.first_name} ${userInfo.last_name}`
                : "..."
            }`}</span>
          </h1>
        </li>
        <li>Dashboard</li>
        <li>Account</li>
        <li>
          <LogOutButton />
        </li>
      </ul>
    </div>
  );
}

interface accountBarProps {
  displayMenu: () => void;
}

export function AccountBar({ displayMenu }: accountBarProps) {
  const [userInfo, setUserInfo] = useState<any>({});
  const [userObj, setUserObj] = useState<User>();

  useEffect(() => {
    async function handleUserInfo() {
      const { user, error } = await getUserDetails();
      // console.log(user);
      if (user) {
        setUserInfo(user.user_metadata);
        setUserObj(user);
        // console.log("Metadata:", user.user_metadata);
      } else {
        window.location.href = "/account";
      }
      // console.log(res.user_metadata); // first_name, last_name
    }
    handleUserInfo();
  }, []);

  // Modals
  const [modal, setModal] = useState<string>();

  function showNotifs() {
    modal ? setModal(undefined) : setModal("bell");
  }
  function showAccMenu() {
    modal ? setModal(undefined) : setModal("user");
  }
  function showHelpMenu() {
    modal ? setModal(undefined) : setModal("help");
  }

  return (
    <div className="flex gap-9 items-center justify-between sm:justify-end bg-white px-5 py-1 accountbar z-10 shadow-md sticky top-0">
      <img
        className="sm:hidden block"
        src="/icons/icon_hamburger.svg"
        alt=""
        width={35}
        onClick={displayMenu}
      />
      <div className="flex sm:gap-5 gap-1 items-center justify-center">
        <BarButton
          icon="docs"
          onClick={() => {
            window.location.href = "/docs";
          }}
        />
        <BarButton
          icon="help"
          onClick={() => showHelpMenu()}
          state={modal === "help"}
        />
        <BarButton
          icon="bell"
          onClick={() => showNotifs()}
          state={modal === "bell"}
        />
        <BarButton
          icon="user"
          onClick={() => showAccMenu()}
          state={modal === "user"}
        />
        {modal === "user" && (
          <AccountModal user={userObj} userInfo={userInfo} />
        )}
      </div>
    </div>
  );
}

interface barButtonProps {
  icon: string;
  onClick: () => void;
  state?: boolean;
}

function BarButton({ icon, onClick, state }: barButtonProps) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={`cursor-pointer hover:bg-violet-100 duration-200 rounded-full sm:p-3 p-2 relative ${
        state && "bg-violet-100"
      }`}
    >
      <img src={`/icons/icon_${icon}.svg`} alt={icon} />
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
