import { CONTACT_LINKS } from "@/app/globals";
interface Props {
  name?: boolean;
  icon?: boolean;
}

export default function ContactLinks({ name, icon }: Props) {
  return (
    <div className="md:mt-7 mt-3 w-full">
      <ul className="flex items-center justify-around gap-4 flex-wrap">
        {CONTACT_LINKS.map(
          (item) =>
            item.display.includes("banner") && (
              <a href={item.link}>
                <li className="flex flex-wrap gap-3 items-center justify-center hover:opacity-70 duration-200">
                  {(icon === undefined || icon === true) && (
                    <span>
                      <img
                        src={`/contact/${item.image}`}
                        alt={item.name}
                        height={30}
                        width={30}
                      />
                    </span>
                  )}
                  {(name === undefined || icon === true) && (
                    <p className="text-indigo-950 font-semibold">{item.name}</p>
                  )}
                </li>
              </a>
            )
        )}
      </ul>
    </div>
  );
}
