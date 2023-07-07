interface Props {
  text: string;
  type: string;
}

export default function Alert({ text, type }: Props) {
  const c_name =
    type === "success"
      ? "bg-green-400 text-green-900 ring-1 ring-green-500 w-full rounded-lg p-3 text-sm"
      : "bg-red-300 text-red-950 ring-1 ring-red-800 w-full rounded-lg p-3 text-sm";
  return <div className={c_name}>{text}</div>;
}
// + type === "success"
// ? type === "alert"
//   ? "bg-red-300 text-red-700 border-red-600"
//   : "bg-yellow-100 text-yellow-950 border-yellow-600"
// : "bg-green-400 text-green-900 border-green-900"
