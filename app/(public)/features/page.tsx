"use client";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import FeatureList from "@/components/features/FeatureList";
import CategoryList from "@/components/features/CategoryList";

const metadata: Metadata = {
  title: "Features | ArtGen",
};

export default function Page() {
  const [pageNumber, setPageNumber] = useState(1);
  const [category, setCategory] = useState("All");

  const handleCategory = (cat: string) => {
    setCategory(cat);
  };

  return (
    <PageWrapper identifier="features">
      <PageHeading
        subheading="Unleash your creative mind with our extensive tools - by the
            community, for you."
      >
        Features at <span className="gradient">ArtGen</span>
      </PageHeading>

      {/* TODO: Add Agolia Search */}
      <div className="md:flex flex-wrap gap-10">
        <CategoryList
          className="flex-1 xl:w-1/5 md:w-1/3 w-full md:sticky top-20 self-start z-10"
          onClick={handleCategory}
          cat={category}
        />

        <FeatureList
          className="flex-3 xl:w-4/5 md:w-2/3 w-full"
          page={pageNumber}
          cat={category}
        />
      </div>
    </PageWrapper>
  );
}
