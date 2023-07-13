"use client";

import PageWrapper from "@/components/PageWrapper";
import LandingPage from "@/components/LandingPage";
import Nav from "@/components/utilities/Nav";
import ShortLink from "@/components/utilities/ShortLink";

import { MainBanner, FeatureBanner } from "@/components/Banners";
import {
  SectionContainer,
  SectionImage,
  SectionText,
} from "@/components/Sections";
import { ButtonGradient } from "@/components/Buttons";
import { FrameworkHeading, FrameworkList } from "@/components/Frameworks";
import { Winner } from "@/components/Winner";

export default function Home() {
  return (
    <main>
      <Nav />
      <LandingPage />
      <PageWrapper identifier="start">
        <FeatureBanner />
        <SectionContainer>
          <SectionText
            side="text-start"
            header="Experience The Unparellend Variety"
            subject="What we offer"
            link="/features/color-palette"
            linktext="View the palette"
          >
            <p>
              Our extensive collection ensures that you'll always find the
              perfect elements to elevate your artwork and designs. Discover a
              world of options, catering to every style and project imaginable
            </p>
          </SectionText>

          <SectionImage img="img_variety.svg" />
        </SectionContainer>
        <SectionContainer reverse={true}>
          <SectionText
            side="text-end"
            header="Quality Craftsmenship"
            subject="What we offer"
            link="/features/learn"
            linktext="Learn how it works"
          >
            <p>
              Immerse yourself in meticulously curated resources, handpicked for
              their exceptional quality. Elevate your creations with top-notch
              elements that make a lasting impact.
            </p>
          </SectionText>

          <SectionImage img="img_craft.png" />
        </SectionContainer>
        <SectionContainer>
          <SectionText
            side="text-start"
            header="Open-Source Community"
            subject="What we offer"
            link="/community"
            linktext="Visit the community"
          >
            <p>
              Connect with fellow artists, share your work, and collaborate
              within a vibrant community of like-minded individuals. Tap into
              the energy of collective inspiration and support.
            </p>
          </SectionText>

          <SectionImage img="img_collaborate.svg" />
        </SectionContainer>
        <div>
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
        <MainBanner identifier="banner gradient" styles="mt-56">
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
        </MainBanner>
      </PageWrapper>
      <PageWrapper dark={"dark"}>
        <SectionContainer dark={true}>
          <SectionText
            header="Friendly Competitions"
            subject=""
            side="text-center"
            dark={true}
          >
            <p className="text-violet-50 text-lg mb-3">
              <span className="gradient font-bold">ArtGen</span> is not just a
              platform; it's a vibrant community where artists and designers
              come together to inspire and support one another. To celebrate
              your talent and foster a sense of friendly competition, we host
              monthly design competitions known as{" "}
              <span className="gradient font-bold">GenComps</span>!
            </p>

            <Winner />

            <p className="text-violet-50 text-lg mb-3">
              Showcase your skills and upload your best designs created using
              our features for a chance to win{" "}
              <span className="gradient1 font-bold hover:opacity-70 duration-150">
                <a href="/pricing#genchips">GenChips</a>
              </span>
              !
            </p>
            <div className="grid place-items-center my-5">
              <ButtonGradient
                text="Sign up today"
                link="/community"
                tab={false}
              />
            </div>
          </SectionText>
        </SectionContainer>
      </PageWrapper>
    </main>
  );
}
