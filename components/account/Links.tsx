import MainBox from "./MainBox";

interface Props {
  userProfile: any;
  className?: string;
}

export default function Links({ userProfile, className }: Props) {
  return <MainBox title="Links" className={className}></MainBox>;
}
