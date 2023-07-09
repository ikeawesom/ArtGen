import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return <div className="w-100 md:mx-48 mx-10">{children}</div>;
}
