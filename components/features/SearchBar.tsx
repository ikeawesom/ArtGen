import { useState } from "react";

interface Props {
  onClick: (query: string) => void;
}

export default function SearchBar({ onClick }: Props) {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full my-10 grid place-items-center">
      <form
        className="md:w-3/4 w-full flex gap-3 flex-wrap sm:flex-nowrap"
        method="GET"
      >
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="py-3 px-5 rounded-lg w-full text-lg ring-1 ring-slate-100 shadow-md"
          type="text"
          placeholder="What are you looking for? Type some keywords like Theme, Color, etc.."
        />
        <button
          type="button"
          className="hover:opacity-70 duration-200 bg-violet-500 text-white py-3 px-5 rounded-lg flex items-center justify-center gap-2 w-full sm:w-fit"
          onClick={() => onClick(query)}
        >
          Search
          <img src="/icons/icon_search.svg" alt="Search" width={20} />
        </button>
      </form>
    </div>
  );
}
