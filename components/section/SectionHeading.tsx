interface Props {
  identifier?: string;
  subject?: string;
  header: string;
  subheader?: string;
}

export default function SectionHeading({
  identifier,
  header,
  subheader,
  subject,
}: Props) {
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
