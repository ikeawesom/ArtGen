"use client";

import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link: string;
  tab: boolean;
  onClick?: () => void;
}

export default function ButtonGradient({ text, link, tab, onClick }: Props) {
  return (
    <Link
      href={{ pathname: link }}
      target={tab ? "_blank" : "_self"}
      className="w-full min-[500px]:w-fit"
      onClick={onClick}
    >
      <button className="w-full text-blue-50 px-7 py-3 rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-700 shadow-md [transition:background-color_200ms,transform_300ms,opacity_300ms] ease-in-out delay-150 hover:translate-y-2">
        {text}
      </button>
    </Link>
  );
}
