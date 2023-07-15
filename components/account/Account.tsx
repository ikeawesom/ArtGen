import { FormEvent, ReactNode, use, useEffect, useState } from "react";
import { handleSignUp } from "@/supabase/auth/handleAuth";

import "./account.css";
import Alert from "../utilities/Alert";

const paddings = "px-5 sm:px-10 lg:px-28 md:px-20 content-container";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export function FormContainer({ children, className }: ContainerProps) {
  return <div className={`w-1/2 h-screen ${className}`}>{children}</div>;
}

interface FormProps {
  title: string;
  user?: boolean;
  onClick: () => void;
}

export function AccountForm({ title, user, onClick }: FormProps) {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    f_name: "",
    l_name: "",
  });
  const [pass, setPass] = useState("");
  const [cfmPass, setCfmPass] = useState("");
  const [verify, setVerify] = useState("");

  function handleEmailChange(email_s: string) {
    setUserDetails((userDetails) => {
      return { ...userDetails, email: email_s };
    });
  }

  function handleFNameChange(fname_s: string) {
    setUserDetails((userDetails) => {
      return { ...userDetails, f_name: fname_s };
    });
  }

  function handleLNameChange(lname_s: string) {
    setUserDetails((userDetails) => {
      return { ...userDetails, l_name: lname_s };
    });
  }

  function handlePasswordChange(password_s: string, cfm: boolean) {
    if (cfm) {
      setPass(password_s);
    } else setCfmPass(password_s);
    setUserDetails((userDetails) => {
      return { ...userDetails, password: password_s };
    });
  }

  async function handleSignUp_Client(
    user: string,
    password: string,
    f_name: string,
    l_name: string
  ) {
    const { data, error } = await handleSignUp(user, password, f_name, l_name);
    if (!error) setVerify("success");
    else {
      setVerify(error.toString());
      console.log(`[CLIENT] ${error}`);
    }
  }

  async function handlePassword(e: FormEvent) {
    e.preventDefault();

    if (pass === cfmPass && pass !== "") {
      console.log("Email:", userDetails.email);
      console.log("Password:", userDetails.password);
      console.log("F_name:", userDetails.f_name);
      console.log("L_name:", userDetails.l_name);
      handleSignUp_Client(
        userDetails.email,
        userDetails.password,
        userDetails.f_name,
        userDetails.l_name
      );
    } else {
      alert("Passwords do not match.");
    }
  }

  return (
    <div className={`grid place-content-center h-full ${paddings} `}>
      <div className="account-container">
        <h1 className="text-3xl font-semibold mb-5 text-indigo-900">{title}</h1>

        {user ? (
          <form className="px-30 w-full" id="login">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full"
            />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full"
            />
            <div className="flex my-1 justify-end">
              <h4
                className="text-violet-600 cursor-pointer hover:opacity-70 duration-200 text-end font-medium text-sm w-fit"
                onClick={() => onClick()}
              >
                Having issues logging in?
              </h4>
            </div>
            <button className="w-full bg-violet-600 text-violet-50 py-3 rounded-md shadow-md mt-5 hover:opacity-80 duration-200">
              Log in
            </button>
            <h4 className="text-center font-medium text-indigo-900 my-3">
              New to ArtGen?{" "}
              <span
                className="text-violet-600 cursor-pointer hover:opacity-70 duration-200"
                onClick={() => onClick()}
              >
                Register.
              </span>
            </h4>
          </form>
        ) : (
          <form
            className="px-30 w-full"
            id="register"
            onSubmit={(e) => handlePassword(e)}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full"
              required={true}
              // value={userDetails.email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2"
                required={true}
                // value={userDetails.f_name}
                onChange={(e) => handleFNameChange(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                required={true}
                className="w-1/2"
                // value={userDetails.l_name}
                onChange={(e) => handleLNameChange(e.target.value)}
              />
            </div>
            <input
              type="password"
              id="password-1"
              placeholder="Choose a password"
              className={`w-full ${
                pass !== cfmPass && "border-2 border-red-500"
              }`}
              minLength={6}
              onChange={(e) => handlePasswordChange(e.target.value, false)}
            />
            <input
              type="password"
              id="password-2"
              placeholder="Confirm your password"
              className={`w-full ${
                pass !== cfmPass && "border-2 border-red-500"
              }`}
              onChange={(e) => handlePasswordChange(e.target.value, true)}
            />
            {pass !== cfmPass && (
              <p className="text-red-500 text-md font-medium">
                Passwords do not match.
              </p>
            )}

            <button className="w-full bg-violet-600 text-violet-50 py-3 rounded-md shadow-md mt-5 hover:opacity-80 duration-200">
              Get started
            </button>
            <h4 className="text-center font-medium text-indigo-900 my-3">
              Already part of ArtGen?{" "}
              <span
                className="text-violet-600 cursor-pointer hover:opacity-70 duration-200"
                onClick={() => onClick()}
              >
                Log in.
              </span>
            </h4>
            {verify !== "" && (
              <Alert type={verify === "success" ? verify : ""}>
                {verify === "success"
                  ? `An email verification has been sent to ${userDetails.email}. Please verify your email before joining us!`
                  : verify}
              </Alert>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

interface DisplayProps {
  display: boolean;
}

export function Display() {
  return (
    <div
      className={`backdrop-blur-2xl h-full grid place-items-center ${paddings}`}
    >
      <div>
        <div className="mb-5">
          <h1 className="text-3xl font-extrabold">
            <span className="gradient1">Join Us</span>
          </h1>
          <h4 className="font-medium text-green-950 mt-3">
            Your digital creativity knows no bounds. Let your imagination run
            wild with our extensive range of design and digital art tools.
          </h4>
        </div>
        <ul>
          <li>
            <span className="flex gap-2">
              <img src="/icons/icon_check.svg" alt="" width={20} />
              <h4>Unparalleled Variety</h4>
            </span>
            <p>
              Our extensive collection ensures that you'll always find the
              perfect elements to elevate your artwork and designs. Discover a
              world of options, catering to every style and project imaginable
            </p>
          </li>
          <li className="my-10">
            <span className="flex gap-2">
              <img src="/icons/icon_check.svg" alt="" width={20} />
              <h4>Quality Craftsmenship</h4>
            </span>
            <p>
              Immerse yourself in meticulously curated resources, handpicked for
              their exceptional quality. Elevate your creations with top-notch
              elements that make a lasting impact.
            </p>
          </li>
          <li>
            <span className="flex gap-2">
              <img src="/icons/icon_check.svg" alt="" width={20} />
              <h4>Open-Source Community</h4>
            </span>
            <p>
              Connect with fellow artists, share your work, and collaborate
              within a vibrant community of like-minded individuals. Tap into
              the energy of collective inspiration and support.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
