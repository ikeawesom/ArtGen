import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title?: string;
  className?: string;
}

export default function MainBox({ children, title, className }: Props) {
  return (
    <div className={`bg-white p-6 shadow-md rounded-md relative ${className}`}>
      <h1 className="font-bold text-xl text-violet-950">{title}</h1>
      {children}
    </div>
  );
}
