import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return <div className="relative w-100 page-wrapper py-20">{children}</div>;
}
