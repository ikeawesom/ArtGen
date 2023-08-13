"use client";
import { ReactNode, useEffect, useState } from "react";
import { SIDEBAR_LINKS } from "@/app/globals";

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
      className={`xl:w-1/6 sm:w-1/6 flex-1 sm:sticky sm:self-start left-0 top-0 bottom-0 z-20 h-full min-h-screen bg-violet-900 fixed sm:p-5 duration-200 ease-in-out -translate-x-full ${
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
        {SIDEBAR_LINKS.map((item) => (
          <a
            key={item.a}
            href={
              item.display === "Community" || item.display === "Features"
                ? item.a
                : `/account/${item.a}`
            }
            target={item.display === "Community" ? "_blank" : ""}
          >
            <li className={curPage.includes(item.a) ? "bg-violet-500" : ""}>
              <span>
                <img src={`/icons/${item.img}`} alt="" />
              </span>
              <span className="text">{item.display}</span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

import { getUserDetails, handleSignOut } from "@/supabase/auth/handleAuth";
import { Button } from "../Buttons";
import { User } from "@supabase/supabase-js";
import profilesDB from "@/supabase/database/handleProfiles";

export function LogOutButton() {
  async function handleClick() {
    const res = await handleSignOut();
    if (res !== "success") alert(res);
    if (res === "success") window.location.href = "/";
  }
  return (
    <Button
      color="bg-violet-800"
      hover="hover:bg-violet-600"
      shadow="shadow-lg"
      padding="p-2"
      duration="duration-100"
      textcolor="text-violet-50"
      onClick={handleClick}
      round="rounded-md"
    >
      <span className="flex gap-2 items-center justify-center text-violet-50 font-medium">
        Sign Out
        <img src="/icons/icon_power_bright.svg" width={15} />
      </span>
    </Button>
  );
}

interface accountModalProps {
  user: User | undefined;
  profile: any;
}

function AccountModal({ user, profile }: accountModalProps) {
  if (user && profile)
    return (
      <div className="modal account text-indigo-950">
        <div className="text-container">
          <h1 className="text-lg font-bold">
            {`${user.user_metadata.first_name} 
                ${user.user_metadata.last_name}
            `}
          </h1>
          <h4 className="text-sm text-violet-400">{user && user.email}</h4>
        </div>

        <div className="bg-violet-100 p-2 px-4 rounded-full my-4 overflow-hidden relative shadow-inner flex gap-2">
          <img
            src="/icons/icon_coin-group.svg"
            alt=""
            className="drop-shadow-2xl"
            width={40}
          />
          <h4 className="text-violet-900 font-bold">{profile[0].genchips}</h4>
          <a
            href="/account/shop"
            className="absolute right-0 top-0 h-full bg-violet-800 grid place-content-center text-2xl text-violet-50 p-2 hover:bg-violet-600"
          >
            <h3>+</h3>
          </a>
        </div>

        {/* <ul className="text-indigo-900 text-sm links">
        <a href="/account/settings#profile">
          <li>Your profile</li>
        </a>
      </ul>

      <ul className="text-indigo-900 text-sm links">
        <a href="/account/posts/mine">
          <li>Your posts</li>
        </a>
        <a href="/account/posts/favourites">
          <li>Your favourites</li>
        </a>
        <a href="/account/posts/submissions">
          <li>Your submissions</li>
        </a>
      </ul> */}
        <hr />

        <ul className="text-indigo-900 text-sm links">
          <a href="/pricing">
            <li>Upgrade plan</li>
          </a>
          <a href="/account/shop">
            <li>Get more GenChips</li>
          </a>
          <a href="/help">
            <li>Contact sales</li>
          </a>
        </ul>
        <hr />
        <ul className="text-indigo-900 text-sm links">
          <a href="/">
            <li>Homepage</li>
          </a>
          <a href="https://github.com/ikeawesom">
            <li>Github</li>
          </a>
        </ul>
        <hr />
        <div className="text-container">
          <LogOutButton />
        </div>
      </div>
    );
}

interface accountBarProps {
  displayMenu: () => void;
  userObj: any;
  userProfile: any;
}

export function AccountBar({
  displayMenu,
  userObj,
  userProfile,
}: accountBarProps) {
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
          <AccountModal user={userObj} profile={userProfile} />
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
      <img src={`/icons/icon_${icon}.svg`} alt={icon} className="bar-icon" />
    </div>
  );
}

interface dashboardProps {
  children: ReactNode;
  className?: string;
}

export function Dashboard({ children, className }: dashboardProps) {
  const [visible, setVisible] = useState(false);
  const [userObj, setUserObj] = useState<User>();
  const [userProfile, setUserProfile] = useState<any>();

  useEffect(() => {
    async function handleUserInfo() {
      const { user, error } = await getUserDetails();
      // console.log(user);
      if (user) {
        setUserObj(user);
        const res = await profilesDB.getAll();
        if (res) {
          setUserProfile(res);
          if (res[0].first_name === "") {
            const resA = await profilesDB.setName(
              user.user_metadata.first_name,
              user.user_metadata.last_name,
              user.id
            );
          }

          // const resA = await profilesDB.setName()
        }

        // console.log("Metadata:", user.user_metadata);
      } else {
        window.location.href = "/";
      }
      // console.log(res.user_metadata); // first_name, last_name
    }
    handleUserInfo();
  }, []);
  return (
    <div className={className}>
      <SideBar state={visible} hideMenu={() => setVisible(!visible)} />
      <div className="xl:w-5/6 sm:w-11/12 w-full flex-5 bg-violet-50">
        <AccountBar
          displayMenu={() => setVisible(!visible)}
          userObj={userObj}
          userProfile={userProfile}
        />
        <div className="bg-violet-50 p-5">{children}</div>
      </div>
    </div>
  );
}
