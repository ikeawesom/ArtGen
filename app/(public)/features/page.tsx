import { Metadata } from "next";
import MainPage from "@/components/features/Main";

export const metadata: Metadata = {
  title: "Features",
};

export default function Page() {
  return <MainPage />;
}
