"use client";

import PageWrapper from "@/components/PageWrapper";
import LandingPage from "@/components/LandingPage";
import FeatureBanner from "@/components/FeatureBanner";
import Nav from "@/components/Nav";
import Section from "@/components/section/Section";
import SectionText from "@/components/section/SectionText";
import SectionImage from "@/components/section/SectionImage";

export default function Home() {
  return (
    <main>
      <Nav />
      <LandingPage />
      <PageWrapper>
        <FeatureBanner />
        <Section>
          <SectionText
            side="text-start"
            identifier="section-text"
            header="Experience The Unparellend Variety"
            subject="What we offer"
            text="Our extensive collection ensures that you'll always find the
            perfect elements to elevate your artwork and designs. Discover a
            world of options, catering to every style and project imaginable."
            link="/features/color_palette"
            linktext="View the palette"
          />

          <SectionImage img="img_variety.svg" />
        </Section>
        <Section reverse={true}>
          <SectionText
            side="text-end"
            identifier="section-text"
            header="Quality Craftsmenship"
            subject="What we offer"
            text="Immerse yourself in meticulously curated resources, handpicked for
            their exceptional quality. Elevate your creations with top-notch
            elements that make a lasting impact."
            link="/features/inspirations"
            linktext="Get your inspirations"
          />

          <SectionImage img="img_craft.png" />
        </Section>
      </PageWrapper>
    </main>
  );
}
