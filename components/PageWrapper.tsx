import { ReactNode } from "react";

interface Props {
  dark?: string;
  children?: ReactNode;
}

export default function PageWrapper({ children, dark }: Props) {
  return <div className={`page-wrapper ${dark}`}>{children}</div>;
}
