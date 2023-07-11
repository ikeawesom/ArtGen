import SectionHeading from "./SectionHeading";

interface Props {
  identifier?: string;
  header: string;
  subheader?: string;
  subject: string;
  text: string;
  link?: string;
  linktext?: string;
  side: string;
}

export default function SectionText({
  identifier,
  header,
  subheader,
  subject,
  text,
  link,
  linktext,
  side,
}: Props) {
  return (
    <div
      className={`flex-1 min-[900pz]:w-1/2 ${identifier} max-[900px]:text-center ${side}`}
    >
      <SectionHeading header={header} subheader={subheader} subject={subject} />
      <p className={` flex-1`}>{text}</p>
      {link && (
        <div
          className={`flex items-center justify-center ${
            side === "text-start"
              ? "min-[900px]:justify-start"
              : "min-[900px]:justify-end"
          }`}
        >
          <a
            href={link}
            className="mt-5 w-fit hover:opacity-70 duration-150 ease-in-out text-violet-800 font-semibold"
          >
            {linktext}
          </a>
        </div>
      )}
    </div>
  );
}