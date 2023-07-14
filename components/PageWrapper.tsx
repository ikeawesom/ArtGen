import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  identifier?: string;
}

export default function PageWrapper({ children, identifier }: Props) {
  return <div className={`page-wrapper ${identifier}`}>{children}</div>;
}
