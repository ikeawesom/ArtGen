import FeatureDB from "@/supabase/database/handleFeatures";
import { useEffect, useState } from "react";
import LoadingIcon from "../utilities/LoadingIcon";

interface Props {
  className?: string;
  onClick: (cat: string) => void;
  cat: string;
}

export default function CategoryList({ className, onClick, cat }: Props) {
  const [catList, setCatList] = useState<any[]>();

  useEffect(() => {
    async function getCats() {
      const res = await FeatureDB.getCategories();
      if (res) {
        setCatList(res);
      }
    }
    getCats();
  }, []);

  return (
    <div className={className}>
      <ul
        className={`md:block flex sm:gap-x-5 gap-1 justify-center items-center mb-0 p-0 md:mb-5`}
      >
        {catList &&
          catList.map((item) => (
            <li
              key={item.name}
              onClick={() => onClick(item.name)}
              className={`p-2 md:mb-3 hover:bg-violet-300 duration-150 md:rounded-lg rounded-full font-medium cursor-pointer flex gap-2 items-center justify-start ${
                item.name === cat && "md:bg-violet-300 bg-violet-300/50"
              }`}
            >
              <img
                src={`/features/categories/${item.icon}`}
                alt={item.name}
                width={40}
              />
              <span className="md:block hidden">{item.name}</span>
            </li>
          ))}
        {!catList && <LoadingIcon size={50} />}
      </ul>
    </div>
  );
}
