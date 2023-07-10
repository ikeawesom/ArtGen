export default function FeatureBanner() {
  return (
    <div>
      <div className="z-20 w-full grid place-items-center feature-banner">
        <div className="w-full bg-violet-100 rounded-md p-8 shadow-lg ring-1 ring-violet-50/10 text-center">
          <h1 className="text-3xl text-indigo-950 font-bold">
            Ignite Your Creative Spark with{" "}
            <span className="gradient">ArtGen</span>
          </h1>
          <h4 className="m-3 text-lg font-bold text-orange-600">
            Our Popular Picks
          </h4>
          <ul className="flex flex-wrap gap-4 justify-around items-center w-full text-indigo-950 mb-5">
            <li className="ring-1 ring-slate-900/5 shadow-md">
              <a href="/features/theme_generator">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <img
                    src="/features/icon_theme.svg"
                    alt="Theme"
                    className="h-14"
                  />
                  <p>Theme Generator</p>
                </div>
              </a>
            </li>
            <li className="ring-1 ring-slate-900/5 shadow-md">
              <a href="/features/gradients">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <img
                    src="/features/icon_gradient.svg"
                    alt="Gradients"
                    className="h-14"
                  />
                  <p>Gradients</p>
                </div>
              </a>
            </li>
            <li className="ring-1 ring-slate-900/5 shadow-md">
              <a href="/features/font_pairing">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <img
                    src="/features/icon_fonts.svg"
                    alt="Fonts"
                    className="h-14"
                  />
                  <p>Font Pairs</p>
                </div>
              </a>
            </li>
            <li className="ring-1 ring-slate-900/5 shadow-md">
              <a href="/features/icons">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <img
                    src="/features/icon_icons.svg"
                    alt="Icons"
                    className="h-14"
                  />
                  <p>Icons</p>
                </div>
              </a>
            </li>
          </ul>

          <div className="grid place-items-center">
            <a href="/features">
              <p className="hover:translate-x-5 duration-300 ease-in-out text-violet-700 font-semibold">
                View all features
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
