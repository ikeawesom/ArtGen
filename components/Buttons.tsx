import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  link?: string;
  tab?: boolean;
  color: string;
  textcolor: string;
  duration?: string;
  hover?: string;
  delay?: string;
  onClick?: () => void;
}

export function Button({
  children,
  link,
  tab,
  onClick,
  color,
  textcolor,
  hover,
  duration,
  delay,
}: ButtonProps) {
  return (
    <Link
      href={{ pathname: link }}
      target={tab ? "_blank" : "_self"}
      className="w-full min-[500px]:w-fit"
      onClick={onClick}
    >
      <button
        className={`w-full ${color} ${textcolor} ${hover} ${duration} px-7 py-2 rounded-md ease-in-out ${delay}`}
      >
        {children}
      </button>
    </Link>
  );
}

interface ButtonGradientProps {
  text: string;
  link: string;
  tab: boolean;
  animation?: boolean;
  onClick?: () => void;
}

export function ButtonGradient({
  text,
  link,
  tab,
  onClick,
  animation,
}: ButtonGradientProps) {
  return (
    <Link
      href={{ pathname: link }}
      target={tab ? "_blank" : "_self"}
      className="w-full min-[500px]:w-fit"
      onClick={onClick}
    >
      <button
        className={`w-full text-blue-50 px-7 py-3 rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-700 shadow-md [transition:background-color_200ms,transform_300ms,opacity_300ms] ease-in-out delay-150 hover:opacity-80 focus:opacity-80  ${
          animation ? "hover:translate-y-2" : ""
        }`}
      >
        {text}
      </button>
    </Link>
  );
}
