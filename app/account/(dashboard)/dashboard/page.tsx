"use client";
import CompleteAccount from "@/components/account/CompleteAccount";
import { useState } from "react";

export default function Page() {
  const [displayCompleteAccModal, setModalDisplay] = useState(true);
  const [visible, setVisible] = useState(true);

  function handleModal() {
    setVisible(false);
    setTimeout(() => {
      setModalDisplay(!displayCompleteAccModal);
    }, 700);
  }

  return (
    <div>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <hr className="mb-6 bg-violet-200 h-[2px]" />
      {displayCompleteAccModal && (
        <CompleteAccount visible={visible} closeAction={() => handleModal()} />
      )}
      <h1>Features</h1>
    </div>
  );
}
