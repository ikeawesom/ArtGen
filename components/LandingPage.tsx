"use client";

import Heading from "./SplashHeading";
import { ButtonGradient } from "@/components/Buttons";
import Circle from "./utilities/Circle";

export default function LandingPage() {
  return (
    <div className=" relative landing-page shadow-md">
      <Circle color="bg-violet-300" position="top-0 right-20" />
      <Circle color="bg-cyan-200" position="top-1/3 left-20" />

      <div className="w-100 min-h-screen py-32 grid place-items-center px-10 md:px-32 z-10 relative backdrop-blur-3xl">
        <div className="flex flex-col items-center justify-center">
          <Heading />
          <div className="flex gap-5 flex-wrap align-middle justify-center w-full">
            <ButtonGradient
              animation={true}
              text="Start exploring"
              link="/features"
              tab={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
