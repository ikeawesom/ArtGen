import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import { FEATURES_LIST } from "@/app/globals";
import PageHeading from "@/components/PageHeading";
import styles from "./features.module.css";

const metadata: Metadata = {
  title: "Features | ArtGen",
};

export default function Page() {
  return (
    <PageWrapper>
      <PageHeading
        subheading="Unleash your creative mind with our extensive tools - by the
            community, for you."
      >
        Features at <span className="gradient">ArtGen</span>
      </PageHeading>

      {/* TODO: Add Agolia Search */}

      <div className="w-100 my-20">
        <ul className="flex lg:gap-x-16 gap-x-5 gap-y-16 justify-evenly items-center flex-wrap text-indigo-950">
          {FEATURES_LIST.map((item) => (
            <a
              key={item.name}
              href={`/features/${item.link}`}
              className={`bg-slate-100 shadow-md self-stretch rounded-md overflow-hidden hover:scale-105 duration-300 ease-in-out ${styles["feature-item"]}`}
            >
              <li>
                <div
                  className={`grid place-items-center p-5 ${styles["image-container"]}`}
                >
                  <img src={`/features/${item.icon}`} alt={item.name} />
                </div>
                <div
                  className={`self-baseline grid place-items-center p-5  ${styles["text-container"]}`}
                >
                  <div className="text-center">
                    <h4 className="font-semibold text-lg text-indigo-950">
                      {item.name}
                    </h4>
                    <p className="text-indigo-800 text-md">{item.desc}</p>
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}
