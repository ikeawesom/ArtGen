import { Dashboard } from "@/components/account/Dashboard";
import "./dashboard.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard", // a default is required when creating a template
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Dashboard
        children={children}
        className="flex h-screen bg-violet-900 overflow-x-hidden"
      />
    </div>
  );
}
