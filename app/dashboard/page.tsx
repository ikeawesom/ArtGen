"use client";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/config";
import Button from "../components/Button";

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

  return <Button text="Sign Out" tab={false} link="" onClick={handleSignOut} />;
}
