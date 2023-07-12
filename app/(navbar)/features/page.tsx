import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Features | ArtGen",
};

export default function Page() {
  const features_lst = [
    { name: "Theme Generator", link: "theme-generator" },
    {
      name: "Gradients",
      link: "gradients",
    },
    {
      name: "Color Palette",
      link: "color-palette",
    },
    {
      name: "Page Dividers",
      link: "page-dividers",
    },
    {
      name: "Font Pairs",
      link: "font-pairing",
    },
    {
      name: "Icons",
      link: "icons",
    },
    {
      name: "Blob Generator",
      link: "blob-generator",
    },
  ];
  return (
    <PageWrapper>
      <div className="pt-5">
        <div className="text-center">
          <h1 className="heading mb-2">
            Features at <span className="gradient">ArtGen</span>
          </h1>
          <p className="sub-heading">
            Unleash your creative mind with our extensive tools - by the
            community, for you.
          </p>
        </div>

        <div className="w-100 my-20">
          <ul className="flex gap-4 justify-center items-center text-indigo-950">
            {features_lst.map((item) => (
              <a
                href={`/features/${item.link}`}
                className="p-5 shadow-md self-stretch flex-1"
              >
                <li>{item.name}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
