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
}

export function SectionContainer({
  background,
  color,
  style,
  size,
  children,
  identifier,
  reverse,
}: ContainerProps) {
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

interface HeadingProps {
  identifier?: string;
  subject?: string;
  header: string;
  subheader?: string;
}

export function SectionHeading({
  identifier,
  header,
  subheader,
  subject,
}: HeadingProps) {
  return (
    <div className="mb-5">
      <h4 className="text-xl font-bold">
        <span className="gradient">{subject}</span>
      </h4>
      <h1
        className={`lg:text-5xl text-3xl my-2 font-extrabold text-indigo-950 ${identifier}`}
      >
        {header}
      </h1>
      <p>{subheader}</p>
    </div>
  );
}

interface ImageProps {
  img: string;
}

export function SectionImage({ img }: ImageProps) {
  return (
    <div className="flex items-center flex-1 min-[900px]:w-1/3 hover:scale-105 duration-150">
      <img className="drop-shadow-2xl " src={`/about/${img}`} />
    </div>
  );
}

interface SectionProps {
  identifier?: string;
  header: string;
  subheader?: string;
  subject: string;
  text: string;
  link: string;
  linktext: string;
  side: string;
}

export function SectionText({
  identifier,
  header,
  subheader,
  subject,
  text,
  link,
  linktext,
  side,
}: SectionProps) {
  return (
    <div
      className={`flex-1 min-[900pz]:w-1/2 ${identifier} max-[900px]:text-center ${side}`}
    >
      <SectionHeading header={header} subheader={subheader} subject={subject} />
      <p className={` flex-1`}>{text}</p>
      {link && (
        <div
          className={`mt-5 flex items-center justify-center ${
            side === "text-start"
              ? "min-[900px]:justify-start"
              : "min-[900px]:justify-end"
          }`}
        >
          <ShortLink link={link} linktext={linktext} />
        </div>
      )}
    </div>
  );
}
