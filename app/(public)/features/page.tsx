"use client";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import FeatureList from "@/components/features/FeatureList";
import CategoryList from "@/components/features/CategoryList";
import SearchBar from "@/components/features/SearchBar";

export default function Page() {
  const [pageNumber, setPageNumber] = useState(1);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const handleCategory = (cat: string) => {
    setCategory(cat);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <PageWrapper identifier="features">
      <PageHeading
        subheading="Unleash your creative mind with our extensive tools - by the
            community, for you."
      >
        Features at <span className="gradient">ArtGen</span>
      </PageHeading>

      <SearchBar onChange={handleSearch} />

      <div className="md:flex flex-wrap gap-10">
        <CategoryList
          className="flex-1 xl:w-1/5 md:w-1/3 mb-5 md:mb-0 p-2 sticky top-20 self-start z-10 md:bg-none bg-gradient-to-r from-violet-700 to-fuchsia-700 md:ring-0 ring-1 ring-violet-500/10 rounded-lg shadow-xl md:shadow-none"
          onClick={handleCategory}
          cat={category}
        />

        <FeatureList
          className="flex-3 xl:w-4/5 md:w-2/3 w-full"
          page={pageNumber}
          cat={category}
          query={query}
        />
      </div>
    </PageWrapper>
  );
}
