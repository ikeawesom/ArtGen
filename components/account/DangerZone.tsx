import MainBox from "./MainBox";

interface Props {
  userProfile: any;
}

export default function DangerZone({ userProfile }: Props) {
  return (
    <MainBox title="Danger Zone" className="mt-5">
      <h1>hello</h1>
    </MainBox>
  );
}
