import { UilArrowRight } from "@iconscout/react-unicons";

export default function FeatureBanner() {
  let feautured_lst = [
    {
      name: "Theme Generator",
      link: "theme_generator",
      alt: "Theme",
      icon: "icon_theme.svg",
    },
    {
      name: "Gradients",
      link: "gradients",
      alt: "Gradients",
      icon: "icon_gradient.svg",
    },
    {
      name: "Font Pairs",
      link: "font_pairing",
      alt: "Font Pairs",
      icon: "icon_fonts.svg",
    },
    {
      name: "Icons",
      link: "icons",
      alt: "Icons",
      icon: "icon_icons.svg",
    },
  ];
  return (
    <div>
      <div className="w-full grid place-items-center">
        <div className="w-full z-10 feature-banner bg-slate-100 rounded-md p-8 shadow-2xl ring-1 ring-violet-200/10 text-center">
          <h1 className="text-3xl text-violet-900 font-bold">
            Ignite Your Creative Spark
          </h1>
          <p className="m-3">
            Popular design and digital art tools available with us.
          </p>
          <ul className="my-10 flex flex-wrap gap-10 justify-around items-center w-full text-violet-900">
            {feautured_lst.map((item) => (
              <li>
                <a href={`/features/${item.link}`}>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <img src={`/features/${item.icon}`} alt={item.alt} />
                    <p className="font-semibold text-lg">{item.name}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="grid place-items-center">
            <a href="/features">
              <p className="hover:translate-x-5 duration-300 ease-in-out text-violet-800 font-semibold flex items-center justify-center">
                View all features
                <UilArrowRight size="25" color="rgb(109 40 217)" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
