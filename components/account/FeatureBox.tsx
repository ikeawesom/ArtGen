import profilesDB from "@/supabase/database/handleProfiles";
import { useEffect, useState } from "react";

export default function FeatureBox() {
  const [metadata, setMetadata] = useState<any>();
  useEffect(() => {
    async function getProfile() {
      const res = await profilesDB.getAll();
      if (res) {
        const data = res[0].metadata;
        if (data) {
          setMetadata(data);
        }
      }
    }
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-md relative">
      <h1 className="font-bold text-xl text-violet-950">My Features</h1>
      <ul
        className={`min-h-[200px]  ${
          metadata ? "" : "grid place-items-center p-10"
        }`}
      >
        {metadata && metadata.map((item: any) => <li>item.name</li>)}
        {!metadata && (
          <div className="flex flex-col gap-5 items-center justify-center text-violet-600">
            <img src="/dashboard/no_features.svg" alt="" width={300} />
            <h1>You currently have not used any features.</h1>
          </div>
        )}
      </ul>

      <div className="w-full flex items-center justify-end">
        <a
          target="_blank"
          href="/features"
          className="text-violet-600 font-semibold hover:opacity-80 w-fit duration-150"
        >
          <h1>View all features</h1>
        </a>
      </div>
    </div>
  );
}
