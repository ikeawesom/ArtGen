import styles from "./features.module.css";

interface ListItemProps {
  name: string;
  desc: string;
  icon: string;
  link: string;
}
export function ListItem({ name, desc, icon, link }: ListItemProps) {
  return (
    <a key={name} href={`/features/${link}`} className={styles["feature-item"]}>
      <li>
        <div
          className={`p-5 grid place-items-center bg-white shadow-md rounded-md ${styles["image-container"]}`}
        >
          <img src={`/features/${icon}`} alt={name} />
        </div>
        <div className={`p-5 ${styles["text-container"]}`}>
          <h4 className="text-indigo-900 font-semibold text-lg">{name}</h4>
          <p className="text-indigo-800 text-sm">{desc}</p>
        </div>
      </li>
    </a>
  );
}
