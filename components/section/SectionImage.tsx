interface Props {
  img: string;
}

export default function SectionImage({ img }: Props) {
  return (
    <div className="flex items-center flex-1 min-[900px]:w-1/3 hover:scale-105 duration-150">
      <img className="drop-shadow-2xl " src={`/about/${img}`} />
    </div>
  );
}
