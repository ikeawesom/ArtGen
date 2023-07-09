interface Props {
  color: string;
  position: string;
}

export default function Circle({ color, position }: Props) {
  return (
    <div
      className={`aspect-square w-40 min-[500px]:w-1/5 absolute rounded-full ${color} ${position}`}
    ></div>
  );
}
