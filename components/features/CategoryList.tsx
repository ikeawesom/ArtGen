import styles from "./features.module.css";
import { FEATURES_CAT } from "@/app/globals";

interface Props {
  className?: string;
  onClick: (cat: string) => void;
  cat: string;
}

export default function CategoryList({ className, onClick, cat }: Props) {
  return (
    <div className={className}>
      <ul
        className={`md:block flex gap-x-5 justify-center items-center flex-wrap mb-5 md:mb-0`}
      >
        {FEATURES_CAT.map((item) => (
          <li
            key={item.title}
            onClick={() => onClick(item.title)}
            className={`p-2 mb-3 hover:bg-violet-300 duration-150 rounded-md font-medium cursor-pointer flex gap-2 items-center justify-start ${
              item.title === cat && "bg-violet-300"
            }`}
          >
            <img
              src={`/features/categories/${item.icon}`}
              alt={item.title}
              width={40}
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
