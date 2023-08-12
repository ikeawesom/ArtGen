import MainBox from "./MainBox";

interface Props {
  userProfile: any;
}

export default function Links({ userProfile }: Props) {
  return <MainBox title="Links" className="flex-1"></MainBox>;
}
