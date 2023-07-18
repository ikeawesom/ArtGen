"use client";
import { FormEvent, useEffect, useState } from "react";
import supabase from "@/supabase/config";
import Alert from "@/components/utilities/Alert";
import "@/components/account/account.css";
import { handleSignOut } from "@/supabase/auth/handleAuth";

export default function Page() {
  const [pass, setPass] = useState("");
  const [cfmPass, setCfmPass] = useState("");
  const [sess, setSess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState("");

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      console.log(event);
      if (event == "PASSWORD_RECOVERY") {
        setSess(true);
      } else {
        // window.location.href = "/account";
      }
    });
  }, []);

  async function handlePasswordChange(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (pass === cfmPass) {
      const { data, error } = await supabase.auth.updateUser({
        password: cfmPass,
      });

      if (data) {
        const res = await handleSignOut();
        if (res === "success") {
          setVerify("success");
        } else {
          setVerify(res.toString());
        }
      }
      if (error) setVerify(error.toString());
    }
    setLoading(false);
  }

  if (sess) {
    return (
      <div className="grid place-items-center h-screen">
        <div>
          <h1 className="text-xl font-bold text-indigo-900 text-center mb-5">
            Change Password
          </h1>
          <form onSubmit={(e) => handlePasswordChange(e)}>
            <input
              type="password"
              placeholder="Enter your new password"
              onChange={(e) => setPass(e.target.value)}
              required={true}
              className={`w-full ${
                pass !== cfmPass && "border-2 border-red-500"
              }`}
              minLength={6}
            />
            <input
              type="password"
              placeholder="Confirm your new password"
              onChange={(e) => setCfmPass(e.target.value)}
              className={`w-full ${
                pass !== cfmPass && "border-2 border-red-500"
              }`}
              minLength={6}
              required={true}
            />
            <button
              disabled={loading}
              className={`w-full bg-violet-600 text-violet-50 py-3 rounded-md shadow-md mt-5 duration-200 grid place-items-center ${
                !loading && "hover:opacity-80"
              } ${loading && "opacity-70"}`}
            >
              {!loading ? (
                "Reset my password"
              ) : (
                <img
                  src="/icons/icon_spinner_light.svg"
                  alt="Loading Info..."
                  className="spinner"
                  width={20}
                />
              )}
            </button>
            <h4 className="text-center font-medium text-indigo-900 my-3">
              New to ArtGen?{" "}
              <span
                className="text-violet-600 cursor-pointer hover:opacity-70 duration-200"
                onClick={() => {
                  window.location.href = "/account";
                }}
              >
                Get started.
              </span>
            </h4>
            {verify !== "" && (
              <Alert type={verify === "success" ? verify : ""}>
                {verify === "success"
                  ? `Your password has been reset. You will be redirected to the sign in page in ${seconds}s.`
                  : verify}
              </Alert>
            )}
          </form>
        </div>
      </div>
    );
  }
  return <h1>Redirecting...</h1>;
}
