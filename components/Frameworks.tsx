import { FRAMEWORK_LIST } from "@/app/globals";
export function FrameworkList() {
  return (
    <ul className="flex items-center gap-5 justify-around my-10 flex-wrap">
      {FRAMEWORK_LIST.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 justify-center hover:scale-95 duration-100 ease-in-out flex-col"
        >
          <span className="bg-violet-50 rounded-full p-3 shadow-lg ">
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
      <h2 className="min-[300px]:text-3xl text-xl font-bold text-violet-950 mb-3">
        {header}
      </h2>
      <p>{subheader}</p>
    </div>
  );
}
