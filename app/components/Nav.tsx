"use client";
import { useState, useEffect } from "react";
import { APP_NAME } from "../globals";
import Button from "./Button";

export default function Nav() {
  return (
    <div className="flex w-full justify-center items-center  sticky top-0 left-0 z-20 bg-[#f9f2ffa2] shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-2 max-w-[1800px] w-full">
        <a href="/" className="flex gap-2 items-center">
          <img src="../favicon.ico" alt="" className="h-8 aspect-square" />
          <h1 className="text-xl font-bold text-violet-700">{APP_NAME}</h1>
        </a>

        {/* Account Buttons */}

        <div className="flex items-center justify-end gap-8">
          {/* Utility Buttons */}
          <ul className="flex gap-7 justify-center items-center text-violet-700 nav-items font-semibold">
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/docs">Docs</a>
            </li>
            <li>
              <a href="/inspirations">Inspirations</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
          </ul>

          <ul>
            <li>
              <Button
                text="Sign Up"
                link="/account"
                tab={false}
                color="bg-violet-700"
                textcolor="text-blue-50"
                hovercolor="hover:bg-violet-600"
              />
            </li>
            <li>
              <Button
                textcolor="text-violet-700"
                text="Login"
                link="/account"
                tab={false}
                color="transparent"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
