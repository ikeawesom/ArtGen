import { SectionImage } from "./Sections";

export function Winner() {
  const username = "@DianaMalewicz"; // sample
  const project_img = "img_winner.png"; // sample
  const tools_used = [
    { name: "Color Palette", link: "color-palette" },
    { name: "Gradients", link: "gradients" },
    { name: "Font Pairs", link: "font-pairing" },
    { name: "Icons", link: "icons" },
  ];
  return (
    <div className="winner my-10 text-center">
      <div className="my-10">
        <h4 className="text-2xl font-semibold text-violet-50">
          Winner of July's Competition
        </h4>
        <h1 className="text-4xl font-bold mt-3">
          <span className="gradient">{username}</span>
        </h1>
      </div>

      <SectionImage
        img={`../community/competition/${project_img}`}
        full={true}
      />
      <div className="my-10">
        <h4 className="text-violet-100 text-lg font-semibold">
          Tools used from <span className="gradient font-bold">ArtGen</span>
        </h4>
        <ul className="flex gap-5 items-center justify-center">
          {tools_used.map((item) => (
            <a href={item.link}>
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
