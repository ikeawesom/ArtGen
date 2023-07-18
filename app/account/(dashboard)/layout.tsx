import { SideBar } from "@/components/account/Dashboard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className=" w-full sm:w-4/5 flex-5 p-5">{children}</div>
    </div>
  );
}
