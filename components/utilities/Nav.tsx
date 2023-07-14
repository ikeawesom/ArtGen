"use client";
import { useState, useEffect } from "react";
import { APP_NAME, APP_LINKS } from "@/app/globals";
import { ButtonGradient } from "@/components/Buttons";

export default function Nav() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  return (
    <div className="flex w-full justify-center items-center sticky top-0 left-0 z-20 min-[900px]:bg-[#f9f2ffa2] bg-[#f9f2ff] shadow-md min-[900px]:backdrop-blur-md">
      <div className="min-[900px]:flex items-center justify-between max-w-[1800px] w-full relative">
        <a
          href="/"
          className="flex gap-2 items-center max-[900px]:bg-[#f9f2ff] p-4"
        >
          <img src="/favicon.svg" alt="icon" className="h-8" />
          <h1 className="text-xl font-extrabold text-violet-700">
            <span className="gradient">{APP_NAME}</span>
          </h1>
        </a>

        <div>
          {!navOpen && (
            <img
              src="/icons/icon_menu.svg"
              alt="Menu"
              width={30}
              className="cursor-pointer hover:opacity-70 min-[900px]:hidden absolute top-4 right-3"
              onClick={() => setNavOpen(!navOpen)}
            />
          )}
          {navOpen && (
            <img
              src="/icons/icon_cross.svg"
              alt="Exit"
              width={30}
              className="cursor-pointer hover:opacity-70 min-[900px]:hidden absolute top-4 right-3"
              onClick={() => setNavOpen(!navOpen)}
            />
          )}
        </div>
        <div
          className={`min-[900px]:flex gap-8 min-[900px]:sticky min-[900px]:w-fit w-full absolute min-[900px]:z-auto z-[-1] left-0  max-[900px]:bg-[#f9f2ff] max-[900px]:shadow-md transition-all duration-1000 ease-in-out  ${
            navOpen
              ? "max-[900px]:translate-y-0"
              : "max-[900px]:-translate-y-[150%]"
          }`}
        >
          {/* Utility Buttons */}
          <ul className="min-[900px]:flex gap-7 justify-center items-center text-violet-700 div-items font-semibold nav-items py-2">
            {APP_LINKS.map(
              (item) =>
                item.showNav && (
                  <li
                    key={item.title}
                    className={currentUrl === item.link ? "font-extrabold" : ""}
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                )
            )}
          </ul>

          {/* Account Buttons */}

          <ul className="min-[900px]:flex gap-2 justify-center items-center min-[900px]:pr-4 py-2">
            <li className="mx-4 mb-2 min-[900px]:m-0">
              <ButtonGradient text="Get started" link="/account" tab={false} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
