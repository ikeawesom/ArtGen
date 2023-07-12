"use client";

import PageWrapper from "@/components/PageWrapper";
import LandingPage from "@/components/LandingPage";
import FeatureBanner from "@/components/FeatureBanner";
import Nav from "@/components/utilities/Nav";
import Section from "@/components/section/Section";
import SectionText from "@/components/section/SectionText";
import SectionImage from "@/components/section/SectionImage";
import ButtonGradient from "@/components/utilities/ButtonGradient";
import Banner from "@/components/Banner";
import { FrameworkHeading, FrameworkList } from "@/components/Frameworks";
import ShortLink from "@/components/utilities/ShortLink";

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
        <Section>
          <SectionText
            side="text-start"
            header="Open-Source Community"
            subject="What we offer"
            text="Connect with fellow artists, share your work, and collaborate within a vibrant community of like-minded individuals. Tap into the energy of collective inspiration and support."
            link="/community"
            linktext="Visit the community"
          />

          <SectionImage img="img_collaborate.svg" />
        </Section>
        <div className="mb-52">
          <h2 className="text-center lg:text-6xl text-4xl font-bold text-indigo-950 my-3">
            Choose <span className="gradient">ArtGen</span> and embark on a
            journey where creativity knows no bounds.
          </h2>
          <p className="text-center text-lg font-medium mb-5">
            Engage yourself in a vast collection of design and digital art
            tools, supported by an engaging community that fuels your passion.
          </p>
          <div className="grid place-items-center my-5">
            <ButtonGradient
              text="Start exploring"
              link="/features"
              tab={false}
              animation={true}
            />
          </div>
        </div>

        <Banner identifier="banner gradient">
          <FrameworkHeading
            header="Work with your favourite framework"
            subheader="Tools at ArtGen are compatible with popular frameworks and even
            vanilla development!"
          />
          <FrameworkList />

          <p>
            Want to add to this list?
            <span>
              <ShortLink
                link="/community"
                linktext=" Learn how to contribute"
              />
            </span>
            .
          </p>
        </Banner>
      </PageWrapper>

      {/* To do
      <PageWrapper dark={"dark"}>
        <h3 className="text-violet-50 text-2xl mb-3">
          <span className="gradient font-bold">ArtGen</span> is not just a
          platform; it's a vibrant community where artists and designers come
          together to inspire and support one another. To celebrate your talent
          and foster a sense of friendly competition, we host monthly design
          competitions! Showcase your skills and upload your best designs
          created using our features for a chance to win{" "}
          <span className="gradient font-bold">GenChips</span>.
        </h3>
        <ShortLink
          link="/pricing"
          linktext="Learn more"
          dark={true}
          size="text-xl"
        />
      </PageWrapper> */}
    </main>
  );
}
