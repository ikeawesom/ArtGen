interface Props {
  text?: string;
}

export default function LoadingScreen({ text }: Props) {
  return (
    <div className="grid place-items-center h-screen">
      <div className="grid place-items-center">
        <img
          src="/icons/icon_spinner.svg"
          alt="Loading Info..."
          className="spinner bg-viol mb-5"
          width={200}
        />

        {text ? (
          <h1>{text}</h1>
        ) : (
          <h1>Hold tight! We're getting your information.</h1>
        )}
      </div>
    </div>
  );
}
