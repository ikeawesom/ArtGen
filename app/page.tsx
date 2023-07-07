"use client";

import PageWrapper from "./components/PageWrapper";
import LandingPage from "./components/LandingPage";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <PageWrapper>
        <h1>hello world</h1>
      </PageWrapper>
    </main>
  );
}
