import styles from "./features.module.css";
import { ListItem } from "./CategoryItems";
import { FEATURES_LIST } from "@/app/globals";
import { useState } from "react";

interface Props {
  page: number;
  className?: string;
  cat: string;
  query: string;
}

export default function FeatureList({ page, className, cat, query }: Props) {
  const start_index = (page - 1) * 9;
  const end_index = start_index + 9;

  var cat_list = FEATURES_LIST.filter((item) => item.cat.includes(cat));
  if (query !== "") {
    cat_list = cat_list.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
    );
  }

  const page_list = cat_list.slice(start_index, end_index);

  return (
    <div className={className}>
      {page_list.length === 0 && (
        <div className="grid place-items-center h-full p-10 text-center">
          <img src="/icons/icon_no-results.svg" alt="" width={250} />
          <h1 className="text-2xl font-semibold text-indigo-800 mt-5 mb-1">
            Nothing here...
          </h1>
          <p>
            Looks like nothing matched your query. Try changing your keywords or
            searching in different categories!
          </p>
        </div>
      )}
      {page_list.length !== 0 && (
        <ul className={styles["feature-catalog"]}>
          {page_list.map((item) => (
            <ListItem
              key={item.name}
              name={item.name}
              desc={item.desc}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
