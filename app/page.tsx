"use client";

import PageWrapper from "./components/PageWrapper";
import LandingPage from "./components/LandingPage";
import Circle from "./components/Circle";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative">
      <LandingPage />
      <PageWrapper>
        <div className="h-screen">
          <h1>hello world</h1>
        </div>
      </PageWrapper>
    </main>
  );
}
