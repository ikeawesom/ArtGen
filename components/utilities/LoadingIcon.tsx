interface Props {
  size: number;
  light: boolean;
}
export default function LoadingIcon({ size, light }: Props) {
  return (
    <div className="grid place-items-center h-full">
      <img
        src={
          light ? "/icons/icon_spinner_light.svg" : "/icons/icon_spinner.svg"
        }
        alt="Loading Info..."
        className="spinner bg-viol mb-5"
        width={size}
      />
    </div>
  );
}
