import CompleteAccount from "@/components/account/CompleteAccount";

export default function Page() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <hr className="mb-6" />
      <CompleteAccount />
      <h1>Features</h1>
    </div>
  );
}
