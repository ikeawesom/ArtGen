import styles from "./features.module.css";
import { FEATURES_LIST } from "@/app/globals";

interface Props {
  page: number;
}

export default function FeatureList({ page }: Props) {
  const start_index = (page - 1) * 9;
  const end_index = start_index + 9;
  const page_list = FEATURES_LIST.slice(start_index, end_index);
  return (
    <div className="w-100 my-20">
      <ul className="flex lg:gap-x-16 gap-x-5 gap-y-16 justify-evenly items-center flex-wrap text-indigo-950">
        {page_list.map((item) => (
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
  );
}
