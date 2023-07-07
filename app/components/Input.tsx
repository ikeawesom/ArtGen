interface Props {
  placeholder?: string;
  width?: boolean;
  type?: string;
}

export default function Input({ placeholder, width, type }: Props) {
  return (
    <input
      className={
        "w-full px-3 py-3 rounded-lg ring-1 ring-slate-900/10 shadow-sm " +
        (width ? "min-[500px]:w-1/2" : "")
      }
      type={type === "text" ? "text" : "password"}
      placeholder={placeholder}
    />
  );
}
