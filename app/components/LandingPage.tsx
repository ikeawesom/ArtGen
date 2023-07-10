"use client";

import Heading from "./Heading";
import ButtonGradient from "./ButtonGradient";
import Circle from "./Circle";
import FeatureBanner from "./FeatureBanner";

export default function LandingPage() {
  return (
    <div className=" relative landing-page shadow-md">
      <Circle color="bg-violet-300" position="top-0 right-20" />
      <Circle color="bg-cyan-200" position="top-1/3 left-20" />

      <div className="w-100 h-screen grid place-items-center px-10 md:px-32 z-10 relative backdrop-blur-3xl">
        <div className="flex flex-col items-center justify-center">
          <Heading />
          <div className="flex gap-5 flex-wrap align-middle justify-center w-full">
            <ButtonGradient text="Get started" link="/account" tab={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
