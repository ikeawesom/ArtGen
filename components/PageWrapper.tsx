import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return <div className="page-wrapper">{children}</div>;
}
