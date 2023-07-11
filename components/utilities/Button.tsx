"use client";

import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link: string;
  tab: boolean;
  color: string;
  textcolor: string;
  hovercolor?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  link,
  tab,
  onClick,
  color,
  textcolor,
  hovercolor,
}: Props) {
  return (
    <Link
      href={{ pathname: link }}
      target={tab ? "_blank" : "_self"}
      className="w-full min-[500px]:w-fit"
      onClick={onClick}
    >
      <button
        className={`w-full ${color} ${textcolor} ${hovercolor} px-7 py-2 rounded-lg [transition:background-color_200ms] ease-in-out delay-150`}
      >
        {text}
      </button>
    </Link>
  );
}
