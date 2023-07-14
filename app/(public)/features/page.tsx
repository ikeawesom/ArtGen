"use client";

import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import FeatureList from "@/components/features/FeatureList";
import { useState } from "react";

const metadata: Metadata = {
  title: "Features | ArtGen",
};

export default function Page() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <PageWrapper>
      <PageHeading
        subheading="Unleash your creative mind with our extensive tools - by the
            community, for you."
      >
        Features at <span className="gradient">ArtGen</span>
      </PageHeading>

      {/* TODO: Add Agolia Search */}
      <FeatureList page={pageNumber} />
    </PageWrapper>
  );
}
