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
        className={`md:block flex sm:gap-x-5 gap-1 justify-center items-center md:mb-5`}
      >
        {FEATURES_CAT.map((item) => (
          <li
            key={item.title}
            onClick={() => onClick(item.title)}
            className={`p-2 md:mb-3 hover:bg-violet-300 duration-150 md:rounded-lg rounded-full font-medium cursor-pointer flex gap-2 items-center justify-start ${
              item.title === cat && "bg-violet-300"
            }`}
          >
            <img
              src={`/features/categories/${item.icon}`}
              alt={item.title}
              width={40}
            />
            <span className="md:block hidden">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
