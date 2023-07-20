import LoadingIcon from "./utilities/LoadingIcon";

interface Props {
  text?: string;
}

export default function LoadingScreen({ text }: Props) {
  return (
    <div className="grid place-items-center h-screen">
      <div className="grid place-items-center">
        <LoadingIcon size={200} />

        {text ? (
          <h1>{text}</h1>
        ) : (
          <h1>Hold tight! We're getting your information.</h1>
        )}
      </div>
    </div>
  );
}
