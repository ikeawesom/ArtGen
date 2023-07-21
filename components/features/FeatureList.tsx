import styles from "./features.module.css";
import { ListItem } from "./CategoryItems";
import { useEffect, useState } from "react";
import FeatureDB from "@/supabase/database/handleFeatures";
import LoadingIcon from "../utilities/LoadingIcon";

interface Props {
  page: number;
  className?: string;
  cat: string;
  query: string;
}

export default function FeatureList({ page, className, cat, query }: Props) {
  const [pageList, setPageList] = useState<any[]>();
  const start_index = (page - 1) * 9;
  const end_index = start_index + 9;

  useEffect(() => {
    async function getFeatures() {
      const res = await FeatureDB.getAll();
      if (res) {
        var cat_list = res.filter((item) => item.category.includes(cat));
        var new_cat_list = [];
        if (query !== "") {
          for (var i = 0; i < cat_list.length; i++) {
            if (
              cat_list[i].name.toLowerCase().includes(query.toLowerCase()) ||
              cat_list[i].desc.toLowerCase().includes(query.toLowerCase())
            ) {
              new_cat_list.push(cat_list[i]);
            } else {
              cat_list[i].category.forEach((item: string) => {
                if (item.toLowerCase().includes(query.toLowerCase())) {
                  new_cat_list.push(cat_list[i]);
                }
              });
              if (cat_list[i].tags) {
                cat_list[i].tags.forEach((item: string) => {
                  if (item.toLowerCase().includes(query.toLowerCase())) {
                    new_cat_list.push(cat_list[i]);
                  }
                });
              }
            }
          }
          // cat_list = cat_list.filter(
          //   (item) =>
          //     item.name.toLowerCase().includes(query.toLowerCase()) ||
          //     item.desc.toLowerCase().includes(query.toLowerCase()) ||
          //     item.category.includes(query)
          // );
          const page_list = new_cat_list.slice(start_index, end_index);
          setPageList(page_list);
        } else {
          const page_list = cat_list.slice(start_index, end_index);
          setPageList(page_list);
        }
      }
    }
    getFeatures();
  }, [cat, query, start_index, end_index]);

  return (
    <div className={className}>
      <h1 className="mb-3 font-medium">Current category: {cat}</h1>
      {pageList && pageList.length === 0 && (
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
      {pageList && (
        <ul className={styles["feature-catalog"]}>
          {pageList.map((item) => (
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
      {!pageList && <LoadingIcon light={false} size={100} />}
    </div>
  );
}
