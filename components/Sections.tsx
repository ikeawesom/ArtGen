import { ReactNode } from "react";
import ShortLink from "@/components/utilities/ShortLink";

interface ContainerProps {
  identifier?: string;
  size?: string;
  background?: string;
  color?: string;
  style?: string;
  reverse?: boolean;
  children: ReactNode;
  dark?: boolean;
}

export function SectionContainer({
  background,
  color,
  style,
  size,
  children,
  identifier,
  reverse,
  dark,
}: ContainerProps) {
  return (
    <div
      className={`${identifier} ${size} ${background} ${color} ${style} ${
        dark ? "" : "md:mb-64 mb-52"
      }`}
    >
      <div
        className={`${
          dark ? "block" : "flex"
        } justify-between items-center max-[900px]:flex-col gap-5 p-0 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

interface HeadingProps {
  identifier?: string;
  subject?: string;
  header: string;
  subheader?: string;
  dark?: boolean;
}

export function SectionHeading({
  identifier,
  header,
  subheader,
  subject,
  dark,
}: HeadingProps) {
  return (
    <div className="mb-5">
      <h4 className="text-xl font-bold">
        <span className={"gradient"}>{subject}</span>
      </h4>
      <h1
        className={`lg:text-5xl text-3xl my-2 font-extrabold ${
          dark ? "text-violet-50" : "text-indigo-950"
        } ${identifier}`}
      >
        {header}
      </h1>
      <p>{subheader}</p>
    </div>
  );
}

interface ImageProps {
  img: string;
  full?: boolean;
}

export function SectionImage({ img, full }: ImageProps) {
  return (
    <div
      className={`flex items-center justify-center flex-1 ${
        full ? "w-full" : "min-[900px]:w-1/3"
      }`}
    >
      <img
        className={`${
          full ? "shadow-cyan shadow-cyan-300" : "drop-shadow-2xl"
        } hover:scale-105 duration-150 ${full ? "w-4/5 rounded-lg" : ""}`}
        src={`${img}`}
      />
    </div>
  );
}

interface SectionProps {
  identifier?: string;
  header: string;
  subheader?: string;
  subject: string;
  children: ReactNode;
  link?: string;
  linktext?: string;
  side: string;
  dark?: boolean;
}

export function SectionText({
  identifier,
  header,
  subheader,
  subject,
  children,
  link,
  linktext,
  side,
  dark,
}: SectionProps) {
  return (
    <div
      className={`flex-1 min-[900pz]:w-1/2 ${identifier} max-[900px]:text-center ${side}`}
    >
      <SectionHeading
        header={header}
        subheader={subheader}
        subject={subject}
        dark={dark}
      />
      <div className={` flex-1`}>{children}</div>

      {link && (
        <div
          className={`mt-5 flex items-center justify-center ${
            side === "text-start"
              ? "min-[900px]:justify-start"
              : "min-[900px]:justify-end"
          }`}
        >
          {linktext && <ShortLink link={link} linktext={linktext} />}
        </div>
      )}
    </div>
  );
}
