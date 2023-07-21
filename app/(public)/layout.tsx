import Footer from "@/components/Footer";
import Nav from "@/components/utilities/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
