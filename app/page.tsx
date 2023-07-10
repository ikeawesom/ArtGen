"use client";

import PageWrapper from "./components/PageWrapper";
import LandingPage from "./components/LandingPage";
import FeatureBanner from "./components/FeatureBanner";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative">
      <LandingPage />
      <PageWrapper>
        <div className="h-screen">
          <FeatureBanner />

          <h1>hello world</h1>
        </div>
      </PageWrapper>
    </main>
  );
}
