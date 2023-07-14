import {
  APP_NAME,
  FOOTER_HEADERS,
  APP_LINKS,
  CONTACT_LINKS,
} from "@/app/globals";

export default function Footer() {
  return (
    <div className="primary-footer shadow-2xl bg-gradient-to-br from-violet-950 to-fuchsia-950 md:px-20 px-5 py-10">
      <div className="grid place-items center text-center mb-8">
        <p className="text-slate-300 text-sm">
          Find an issue with this page?{" "}
          <span className="text-blue-400 hover:opacity-70">
            <a
              href="https://github.com/ikeawesom/ArtGen/tree/master/app"
              target="_blank"
            >
              Fix it on GitHub
            </a>
          </span>
          .
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-y-10">
        <div className="flex gap-2 md:items-start items-center md:text-start text-center flex-col justify-start flex-1 md:w-1/2 w-full">
          <a href="/">
            <div className="flex gap-2 items-center justify-center hover:brightness-125 duration-200">
              <img width={50} src="/favicon.svg" alt="ArtGen Icon" />
              <h1 className="text-4xl">
                <span className="gradient">{APP_NAME}</span>
              </h1>
            </div>
          </a>
          <h1 className="md:w-1/2 w-full text-violet-100 font-semibold">
            Discover the tools that will revolutionize your artistic journey.
          </h1>
        </div>
        <div className="md:w-1/2 w-full flex-1 md:text-start text-center">
          <div className="flex gap-x-10 gap-y-5 flex-wrap">
            {FOOTER_HEADERS.map((header) => (
              <ul className="flex-1" key={header}>
                <h4 className="font-bold text-violet-200">{header}</h4>
                {APP_LINKS.map(
                  (item) =>
                    item.type === header && (
                      <li className="mt-5" key={item.title}>
                        <a
                          className="text-violet-200 hover:opacity-70 duration-150"
                          href={item.link}
                        >
                          {item.title}
                        </a>
                      </li>
                    )
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center md:justify-between justify-center mt-10 gap-x-10 gap-y-5 flex-wrap-reverse md:flex-wrap md:text-start text-center">
        <h4 className="text-violet-100 text-sm font-medium">
          Copyright &copy; 2023 ArtGen | Ike Lim. All Rights Reserved.
        </h4>
        <ul className="flex gap-5">
          {CONTACT_LINKS.map(
            (item) =>
              item.display.includes("footer") && (
                <a
                  key={item.name}
                  href={item.link}
                  className="duration-150 hover:opacity-70"
                >
                  <li>
                    <img
                      height={25}
                      width={25}
                      src={`/contact/${item.image_bright}`}
                      alt={item.name}
                    />
                  </li>
                </a>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
