import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  subheading?: string | ReactNode;
}

export default function PageHeading({ children, subheading }: Props) {
  return (
    <div className="text-center mb-10">
      <h1 className="heading mb-2">{children}</h1>
      <p className="sub-heading">{subheading}</p>
    </div>
  );
}
