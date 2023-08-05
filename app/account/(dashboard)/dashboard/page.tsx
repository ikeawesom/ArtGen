"use client";
import CompleteAccount from "@/components/account/CompleteAccount";
import FeatureBox from "@/components/account/FeatureBox";
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
    <div className="flex flex-col gap-5">
      {displayCompleteAccModal && (
        <CompleteAccount visible={visible} closeAction={() => handleModal()} />
      )}
      <FeatureBox />
    </div>
  );
}
