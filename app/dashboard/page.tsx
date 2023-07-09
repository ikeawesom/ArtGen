"use client";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/config";
import Button from "../components/Button";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Dashboard | ArtGen",
};

export default function Page() {
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.href = "/";
      })
      .catch((error) => {
        alert(`ERROR ${error.code}: ${error.message}`);
      });
  };

  return (
    <Button
      color="bg-violet-700"
      textcolor="text-blue-50"
      hovercolor="hover:bg-violet-500"
      text="Sign Out"
      tab={false}
      link=""
      onClick={handleSignOut}
    />
  );
}
