"use client";

import PageWrapper from "./components/PageWrapper";
import LandingPage from "./components/LandingPage";
import FeatureBanner from "./components/FeatureBanner";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative">
      <LandingPage />
      <FeatureBanner />
      <PageWrapper>
        <div className="h-screen">
          <h1>hello world</h1>
        </div>
      </PageWrapper>
    </main>
  );
}
