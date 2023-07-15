import { ReactNode } from "react";

interface Props {
  type: string;
  children?: ReactNode;
}

export default function Alert({ type, children }: Props) {
  const c_name =
    type === "success"
      ? "bg-green-400 text-green-900 ring-green-500"
      : "bg-red-300 text-red-950 ring-red-800";
  return (
    <div
      className={`${c_name} ring-1 w-full rounded-lg p-3 text-sm font-semibold`}
    >
      {children}
    </div>
  );
}
