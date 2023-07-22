import { Dashboard } from "@/components/account/Dashboard";
import "./dashboard.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Dashboard children={children} className="flex" />
    </div>
  );
}
