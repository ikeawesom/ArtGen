import Footer from "@/components/Footer";
import Nav from "@/components/utilities/Nav";

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
