import { SideBar, AccountBar } from "@/components/account/Dashboard";
import "./dashboard.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full sm:w-5/6 flex-5 bg-violet-50">
        <AccountBar />
        {children}
      </div>
    </div>
  );
}
