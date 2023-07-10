import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return <div className="w-100 md:px-48 px-10 page-wrapper">{children}</div>;
}
