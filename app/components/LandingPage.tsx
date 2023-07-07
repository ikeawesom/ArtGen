"use client";

import Heading from "./Heading";
import Button from "./Button";

export default function LandingPage() {
  return (
    <div className="w-100 h-screen grid place-items-center px-10 md:px-32">
      <div className="flex flex-col items-center justify-center">
        <Heading />
        <div className="flex gap-5 flex-wrap align-middle justify-center">
          <Button text="Get Started" link="/account" tab={false} />
        </div>
      </div>
    </div>
  );
}
