import { ReactNode } from "react";

interface Props {
  identifier?: string;
  size?: string;
  background?: string;
  color?: string;
  style?: string;
  reverse?: boolean;
  children: ReactNode;
}

export default function Section({
  background,
  color,
  style,
  size,
  children,
  identifier,
  reverse,
}: Props) {
  return (
    <div
      className={`${identifier} ${size} ${background} ${color} ${style} md:mb-64 mb-52`}
    >
      <div
        className={`flex justify-between items-center max-[900px]:flex-col gap-5 p-0 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
