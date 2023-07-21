interface Props {
  size: number;
}
export default function LoadingIcon({ size }: Props) {
  return (
    <div className="grid place-items-center h-full">
      <img
        src="/icons/icon_spinner.svg"
        alt="Loading Info..."
        className="spinner bg-viol mb-5"
        width={size}
      />
    </div>
  );
}
