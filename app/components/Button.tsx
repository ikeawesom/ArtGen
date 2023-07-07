"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link: string;
  tab: boolean;
  onClick?: () => void;
}

export default function Button({ text, link, tab, onClick }: Props) {
  return (
    <Link
      href={{ pathname: link }}
      target={tab ? "_blank" : "_self"}
      className="w-full min-[500px]:w-fit"
      onClick={onClick}
    >
      <button className="w-full bg-indigo-950 text-blue-50 px-7 py-3 rounded-lg hover:bg-indigo-800 focus:bg-indigo-800 [transition:background-color_200ms,transform_300ms,opacity_300ms] ease-in-out delay-150 hover:translate-y-2">
        {text}
      </button>
    </Link>
  );
}
