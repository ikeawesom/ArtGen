"use client";
import CompleteAccount from "@/components/account/CompleteAccount";
import { useState } from "react";

export default function Page() {
  const [displayCompleteAccModal, setModalDisplay] = useState(true);

  function handleModal() {
    setModalDisplay(!displayCompleteAccModal);
  }

  return (
    <div>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <hr className="mb-6" />
      {displayCompleteAccModal && (
        <CompleteAccount closeAction={() => handleModal()} />
      )}
      <h1>Features</h1>
    </div>
  );
}
