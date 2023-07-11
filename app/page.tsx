"use client";

import PageWrapper from "./components/PageWrapper";
import LandingPage from "./components/LandingPage";
import FeatureBanner from "./components/FeatureBanner";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
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
