import { ReactNode } from "react";

interface Props {
  dark?: string;
  children?: ReactNode;
  identifier?: string;
}

export default function PageWrapper({ children, dark, identifier }: Props) {
  return <div className={`page-wrapper ${dark} ${identifier}`}>{children}</div>;
}
