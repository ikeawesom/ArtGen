import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  identifier?: string;
}
export default function Banner({ children, identifier }: Props) {
  return (
    <div className="w-full grid place-items-center">
      <div
        className={`w-full z-10 ${identifier} rounded-md md:p-10 p-8 shadow-2xl ring-1 ring-violet-200/10 text-center`}
      >
        {children}
      </div>
    </div>
  );
}
