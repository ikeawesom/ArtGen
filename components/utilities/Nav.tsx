"use client";
import { useState, useEffect } from "react";
import { APP_NAME } from "@/app/globals";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import ButtonGradient from "./ButtonGradient";

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
          className="flex gap-2 items-center max-[900px]:bg-[#f9f2ff] px-4 py-2"
        >
          <img src="/favicon.svg" alt="icon" className="h-8" />
          <h1 className="text-xl font-bold text-violet-700">
            <span className="gradient">{APP_NAME}</span>
          </h1>
        </a>

        <div>
          {!navOpen && (
            <UilBars
              size="25"
              color="rgb(109 40 217)"
              className="cursor-pointer hover:opacity-70 min-[900px]:hidden absolute top-3 right-5"
              onClick={() => setNavOpen(!navOpen)}
            />
          )}
          {navOpen && (
            <UilTimes
              size="25"
              color="rgb(109 40 217)"
              className="cursor-pointer hover:opacity-70 min-[900px]:hidden absolute top-3 right-5"
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
            <li className={currentUrl === "/features" ? "font-bold" : ""}>
              <a href="/features">Features</a>
            </li>
            <li className={currentUrl === "/learn" ? "font-bold" : ""}>
              <a href="/learn">Learn</a>
            </li>
            <li className={currentUrl === "/inspirations" ? "font-bold" : ""}>
              <a href="/inspirations">Inspirations</a>
            </li>
            <li className={currentUrl === "/community" ? "font-bold" : ""}>
              <a href="/community">Community</a>
            </li>
            <li className={currentUrl === "/pricing" ? "font-bold" : ""}>
              <a href="/pricing">Pricing</a>
            </li>
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
