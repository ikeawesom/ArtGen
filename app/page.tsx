"use client";

import PageWrapper from "./components/PageWrapper";
import LandingPage from "./components/LandingPage";
import Circle from "./components/Circle";
import { useState } from "react";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <LandingPage />
      <PageWrapper>
        <div className="h-screen">
          <h1>hello world</h1>
        </div>
      </PageWrapper>
    </main>
  );
}
