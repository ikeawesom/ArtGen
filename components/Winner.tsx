import { SectionImage } from "./Sections";
import {
  COMP_WINNER_USERNAME,
  COMP_WINNER_IMG,
  COMP_WINNER_TOOLS,
} from "@/app/globals";

export function Winner() {
  return (
    <div className="winner my-10 text-center">
      <div className="my-10">
        <h4 className="md:text-2xl text-xl font-semibold text-violet-50">
          Winner of July's Competition
        </h4>
        <h1 className="md:text-4xl text-2xl font-bold mt-3">
          <span className="gradient">{COMP_WINNER_USERNAME}</span>
        </h1>
      </div>

      <SectionImage
        img={`../community/competition/${COMP_WINNER_IMG}`}
        full={true}
      />
      <div className="my-10">
        <h4 className="text-violet-100 text-lg font-semibold">
          Tools used from <span className="gradient font-bold">ArtGen</span>
        </h4>
        <ul className="flex gap-x-5 items-center justify-center flex-wrap">
          {COMP_WINNER_TOOLS.map((item) => (
            <a key={item.name} href={item.link}>
              <li className="text-violet-100 hover:text-violet-300">
                {item.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
