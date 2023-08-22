import styles from "./features.module.css";

interface ListItemProps {
  name: string;
  desc: string;
  icon: string;
  link: string;
  tags: string[];
}
export function ListItem({ name, desc, icon, link, tags }: ListItemProps) {
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

          <div className="mt-3">
            <ul>
              {tags &&
                tags.map((item, index) => (
                  <li
                    key={index}
                    className={`py-2 px-3 w-fit rounded-md text-violet-50 text-sm drop-shadow-sm ${
                      item === "pro"
                        ? "bg-gradient-to-br from-cyan-300 to-fuchsia-500"
                        : ""
                    }`}
                  >
                    <h1>#{item}</h1>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </li>
    </a>
  );
}
