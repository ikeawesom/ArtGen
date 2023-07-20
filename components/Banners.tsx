import { ReactNode, useEffect, useState } from "react";
import { getAllData } from "@/supabase/database/handleDB";

interface BannerProps {
  children?: ReactNode;
  identifier?: string;
  styles?: string;
}
export function MainBanner({ children, identifier, styles }: BannerProps) {
  return (
    <div className={`w-full grid place-items-center ${styles}`}>
      <div
        className={`w-full z-10 ${identifier} rounded-md md:p-10 p-8 shadow-2xl ring-1 ring-violet-200/10 text-center`}
      >
        {children}
      </div>
    </div>
  );
}

export function FeatureBanner() {
  const [features, setFeatures] = useState<any[]>();

  useEffect(() => {
    async function loadFeatures() {
      const features = await getAllData("features");
      if (features) {
        setFeatures(features);
      } else {
        setFeatures([]);
      }
    }
    loadFeatures();
  }, []);

  return (
    <div>
      <MainBanner identifier="feature banner">
        <h1 className="text-3xl text-violet-900 font-bold">
          Ignite Your Creative Spark
        </h1>
        <p className="my-3">
          Popular design and digital art tools available with us.
        </p>
        <ul className="my-5 flex flex-wrap gap-x-20 gap-y-5 justify-around items-center w-full text-violet-900">
          {features &&
            features.map(
              (item) =>
                item.featured && (
                  <li key={item.name}>
                    <a href={`/features/${item.link}`}>
                      <div className="flex flex-col gap-3 items-center justify-center">
                        <img src={`/features/${item.icon}`} alt={item.name} />
                        <p className="font-semibold text-lg">{item.name}</p>
                      </div>
                    </a>
                  </li>
                )
            )}

          {!features && (
            <div className="grid place-items-center">
              <img
                src="/icons/icon_spinner.svg"
                alt="Loading Info..."
                className="spinner bg-viol mb-5"
                width={50}
              />
            </div>
          )}
        </ul>

        <div className="grid place-items-center">
          <a href="/features">
            <p className="hover:translate-x-5 duration-300 ease-in-out text-violet-800 font-semibold flex items-center justify-center">
              <span className="flex gap-1 items-center justify-center">
                View all features
                <img
                  src="/icons/icon_right-arrow.svg"
                  alt="Proceed"
                  width={20}
                />
              </span>
            </p>
          </a>
        </div>
      </MainBanner>
    </div>
  );
}
