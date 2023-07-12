interface Props {
  link: string;
  linktext: string;
  dark?: boolean;
  size?: string;
}

export default function ShortLink({ link, linktext, dark, size }: Props) {
  return (
    <a
      href={link}
      className={`w-fit hover:opacity-70 duration-150 ease-in-out font-semibold ${size} ${
        dark ? "text-violet-400" : "text-violet-800"
      }`}
    >
      {linktext}
    </a>
  );
}
