"use client";
import { ReactNode, use, useEffect, useState } from "react";
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
      className={`xl:w-1/6 sm:w-1/12 flex-1 sm:sticky sm:self-start left-0 top-0 bottom-0 z-20 h-full min-h-screen bg-violet-900 fixed sm:p-5 duration-200 ease-in-out -translate-x-full ${
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
            href={item.display === "Community" ? item.a : `/account/${item.a}`}
            target={item.display === "community" ? "_blank" : ""}
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
        <img src="/icons/icon_power_bright.svg" className="logout" width={15} />
      </span>
    </Button>
  );
}

interface accountModalProps {
  userInfo: any;
  user: User | undefined;
}

function AccountModal({ userInfo, user }: accountModalProps) {
  return (
    <div className="modal account text-indigo-950">
      <div className="text-container">
        <h1 className="text-lg font-bold">
          {`${
            userInfo.first_name
              ? `${userInfo.first_name} ${userInfo.last_name}`
              : "..."
          }`}
        </h1>
        <h4 className="text-sm text-violet-400">{user && user.email}</h4>
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
  userInfo: any;
  userObj: any;
}

export function AccountBar({
  displayMenu,
  userInfo,
  userObj,
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
          userInfo={userInfo}
          userObj={userObj}
        />
        <div className="min-h-screen bg-violet-50 p-5">{children}</div>
      </div>
    </div>
  );
}
