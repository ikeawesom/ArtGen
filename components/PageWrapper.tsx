import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return <div className="w-100 page-wrapper h-full">{children}</div>;
}
