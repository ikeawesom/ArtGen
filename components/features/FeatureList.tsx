import styles from "./features.module.css";
import { ListItem } from "./CategoryItems";
import { FEATURES_LIST } from "@/app/globals";

interface Props {
  page: number;
  className?: string;
  cat: string;
}

export default function FeatureList({ page, className, cat }: Props) {
  const start_index = (page - 1) * 9;
  const end_index = start_index + 9;

  var cat_list = FEATURES_LIST.filter((item) => item.cat.includes(cat));

  const page_list = cat_list.slice(start_index, end_index);

  return (
    <div className={className}>
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
    </div>
  );
}
