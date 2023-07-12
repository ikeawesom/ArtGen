export function FrameworkList() {
  const frameworkList = ["React", "Svelte", "Angular", "Vue", "Vanilla"];
  return (
    <ul className="flex items-center gap-5 justify-around my-10 flex-wrap">
      {frameworkList.map((item) => (
        <li className="flex items-center gap-2 justify-center hover:scale-95 duration-100 ease-in-out flex-col">
          <span className="bg-white rounded-full p-3">
            <img className="h-10" src={`./frameworks/${item}.svg`} alt={item} />
          </span>
          <p className="font-semibold cursor-default">{item}</p>
        </li>
      ))}
    </ul>
  );
}

interface Props {
  header: string;
  subheader: string;
}

export function FrameworkHeading({ header, subheader }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-violet-950 mb-3">{header}</h2>
      <p>{subheader}</p>
    </div>
  );
}
