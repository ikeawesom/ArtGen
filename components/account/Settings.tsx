"use client";

import { FormEvent, useEffect, useState } from "react";
import MainBox from "./MainBox";
import "./account.css";
import profilesDB from "@/supabase/database/handleProfiles";
import supabase from "@/supabase/config";
import { handleDeleteUser, handleSignOut } from "@/supabase/auth/handleAuth";

interface ProfileProps {
  userProfile: any;
  className?: string;
}
export function Profile({ userProfile, className }: ProfileProps) {
  const [username, setUsername] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newCfmPass, setNewCfmPass] = useState("");
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    if (userProfile) setUsername(userProfile[0].display_name);
  }, []);

  useEffect(() => {
    if (userProfile) {
      if (
        newPass === "" &&
        newCfmPass === "" &&
        username === userProfile[0].display_name
      ) {
        setEdited(false);
      } else {
        setEdited(true);
      }
    }
  }, [newPass, newCfmPass, username]);

  function handleUsernameChange(name: string) {
    setUsername(name);
  }
  function handleNewPassChange(newPass: string) {
    setNewPass(newPass);
  }

  function handleCfmNewPassChange(newCfmPass: string) {
    setNewCfmPass(newCfmPass);
  }

  async function handleProfileSubmit(e: FormEvent) {
    e.preventDefault();
    var success = false;

    if (username !== userProfile[0].display_name) {
      // edit username
      const res = await profilesDB.setUsername(username, userProfile[0].id);
      if (res === "success") {
        alert("Display name updated!");
        var success = true;
      } else alert("An error has occured. Please try again later.");
    }

    // Change passwords
    if (newPass !== newCfmPass) {
      alert("Passwords do not match!");
    } else if (newPass !== "" && newCfmPass !== "") {
      const { data, error } = await supabase.auth.updateUser({
        password: newCfmPass,
      });
      if (error) {
        const error_lst = error.toString().split(": ");
        alert(`ERROR: ${error_lst[1]}`);
        console.log(`[CLIENT] ${error}`);
      } else {
        alert("Password changed successfully!");
        var success = true;
      }
    }

    if (success) {
      window.location.reload();
    }
  }

  return (
    <MainBox title="Profile" className={className}>
      <form onSubmit={handleProfileSubmit}>
        <FormRow
          label="Name"
          value={`${userProfile[0].first_name} ${userProfile[0].last_name}`}
          type="text"
        />
        <FormRow
          label="Email Address"
          value={`${userProfile[0].email}`}
          type="email"
        />

        <FormRow
          label="Display Name"
          placeholder="Enter a display name"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />

        <hr className="my-6" />

        <FormRow
          label="New Password"
          placeholder="Enter a new password"
          type="password"
          value={newPass}
          onChange={handleNewPassChange}
        />
        <FormRow
          label="Confirm New Password"
          placeholder="Enter your current password"
          type="password"
          value={newCfmPass}
          onChange={handleCfmNewPassChange}
        />
        <div className="flex items-center justify-end mt-5">
          <button
            disabled={!edited}
            type="submit"
            className={` text-violet-50 py-2 px-5 rounded-md duration-150 ${
              edited ? "hover:bg-violet-500 bg-violet-600" : "bg-violet-400"
            }`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </MainBox>
  );
}

interface LinksProps {
  userProfile: any;
  className?: string;
}

export function Links({ userProfile, className }: LinksProps) {
  const [git, setGit] = useState("");
  const [linked, setLinked] = useState("");
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    if (userProfile) {
      if (
        git === userProfile[0].github_url &&
        linked === userProfile[0].linkedin_url
      ) {
        setEdited(false);
      } else {
        setEdited(true);
      }
    }
  }, [git, linked]);

  useEffect(() => {
    if (userProfile) {
      setGit(userProfile[0].github_url);
      setLinked(userProfile[0].linkedin_url);
    }
  }, []);

  function handleGitChange(url: string) {
    setGit(url);
  }

  function handleLinkedChange(url: string) {
    setLinked(url);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    var success = false;

    const gitRes = await profilesDB.setGit(git, userProfile[0].id);
    const linkedRes = await profilesDB.setLinked(linked, userProfile[0].id);

    if (gitRes === "success" && linkedRes === "success") {
      alert("Links updated successfully!");
      success = true;
    } else if (gitRes !== "success" && linkedRes === "success") {
      const error_lst = gitRes.toString().split(": ");
      alert(`ERROR: ${error_lst[1]}`);
      console.log(`[CLIENT] ${gitRes}`);
      success = true;
    } else if (linkedRes !== "success" && gitRes === "success") {
      const error_lst = linkedRes.toString().split(": ");
      alert(`ERROR: ${error_lst[1]}`);
      console.log(`[CLIENT] ${linkedRes}`);
      success = true;
    } else {
      const error_lstA = gitRes.toString().split(": ");
      const error_lstB = linkedRes.toString().split(": ");
      alert(`ERROR: ${error_lstA[1]} | ${error_lstB[1]}`);
      console.log(`[CLIENT] ${gitRes} | ${linkedRes}`);
      success = true;
    }

    if (success) window.location.reload();
  }
  return (
    <MainBox title="Links" className={className}>
      <form onSubmit={handleSubmit}>
        <FormRow
          label="GitHub"
          type="URL"
          placeholder="Enter the link to your GitHub profile"
          value={git}
          onChange={handleGitChange}
        />

        <FormRow
          label="LinkedIn"
          type="URL"
          placeholder="Enter the link your LinkedIn profile"
          value={linked}
          onChange={handleLinkedChange}
        />

        <div className="flex items-center justify-end mt-5">
          <button
            disabled={!edited}
            type="submit"
            className={` text-violet-50 py-2 px-5 rounded-md duration-150 ${
              edited ? "hover:bg-violet-500 bg-violet-600" : "bg-violet-400"
            }`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </MainBox>
  );
}

interface DZProps {
  userProfile: any;
  className?: string;
  showModal: () => void;
}

export function DangerZone({ userProfile, className, showModal }: DZProps) {
  return (
    <MainBox title="Danger Zone" className="mt-5 ">
      <div className="border-red-600 border-[1px] p-5 rounded-md flex sm:gap-5 sm:items-center sm:justify-between sm:my-2 w-full sm:flex-row flex-col items-start justify-start gap-3 my-5">
        <label htmlFor="delete_account">
          <h1 className="font-semibold">Delete Account</h1>
          <p className="text-md">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </label>

        <button
          className={`${className} border-red-600 border-2 py-2 px-5 rounded-md duration-150 font-semibold text-red-600 hover:bg-red-600 hover:text-white`}
          name="delete_account"
          onClick={() => showModal()}
        >
          Delete Account
        </button>
      </div>
    </MainBox>
  );
}

interface FormRowProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (name: string) => void;
  className?: string;
}

function FormRow({
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
}: FormRowProps) {
  return (
    <div className="flex sm:gap-5 sm:items-center sm:justify-between sm:my-2 w-full sm:flex-row flex-col items-start justify-start gap-0 my-5">
      <label className="sm:w-1/5 w-full" htmlFor={label}>
        {label}
      </label>

      {onChange ? (
        <input
          className={`w-full sm:w-4/5 ${className}`}
          type={type}
          placeholder={placeholder}
          name={label}
          value={value ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          min={type === "password" ? 6 : undefined}
        />
      ) : (
        <input
          className="w-full sm:w-4/5"
          type={type}
          placeholder={placeholder}
          name={label}
          value={value ? value : ""}
          onChange={(e) => {
            value = e.target.value;
          }}
          onClick={() => {
            alert(`You cannot change your ${label}.`);
          }}
        />
      )}
    </div>
  );
}

interface DeleteAccModalProps {
  visible: boolean;
  userProfile: any;
  exitModal: () => void;
}

export function DeleteAccModal({
  visible,
  userProfile,
  exitModal,
}: DeleteAccModalProps) {
  var verify = "";
  if (userProfile) {
    verify = `${userProfile[0].email}/${userProfile[0].first_name}-${userProfile[0].last_name}`;
  }

  const [userVerify, setUserVerify] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleDeletion(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const id = userProfile[0].id;

    const res = await handleSignOut();
    if (res === "success") {
      const { data, error } = await handleDeleteUser(id);
      if (!error) {
        window.location.href = "/";
      } else {
        console.log(error);
      }
    } else {
      console.log(res);
    }
  }

  if (visible && userProfile)
    return (
      <div className="grid place-items-center w-screen h-screen min-h-screen min-w-full fixed top-0 left-0 bg-slate-800/50 z-20 px-5">
        <div className="bg-white shadow-lg p-4 relative sm:w-96 rounded-md text-violet-900">
          <div className="flex justify-between items-center gap-2">
            <h1 className="font-semibold text-lg">Delete Account</h1>
            <img
              onClick={() => {
                if (!loading) {
                  setUserVerify("");
                  setLoading(false);
                  exitModal();
                }
              }}
              src="/icons/icon_cross.svg"
              alt=""
              className={`${
                loading
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:brightness-150"
              } duration-150 w-3`}
            />
          </div>
          <hr className="border-violet-300 w-full mx-0" />

          <div>
            <h2>You will be forfeiting:</h2>
            <ul className="list-disc del-list">
              <li>Premium features</li>
              <li>GenComps opportunities</li>
              <li>Contribution opportunities</li>
              <li>
                <span className="font-bold">All</span> available GenChips in
                your account
              </li>
            </ul>
          </div>

          <hr className="border-violet-300 w-full mx-0" />

          <h3 className="text-sm">
            To confirm, type in <span className="font-bold">"{verify}"</span> in
            the box below. This cannot be undone!
          </h3>
          <form onSubmit={handleDeletion}>
            <input
              className={`w-full my-5`}
              type={"text"}
              placeholder={verify}
              name={"verify"}
              value={userVerify}
              onChange={(e) => setUserVerify(e.target.value)}
            />

            <button
              className={`grid place-items-center w-full border-red-600 border-2 py-2 px-5 rounded-md duration-150 font-semibold text-red-600 ${
                userVerify !== verify || loading
                  ? "cursor-not-allowed opacity-30"
                  : "hover:bg-red-600 hover:text-white"
              }`}
              name="delete_account"
              type="submit"
              disabled={userVerify !== verify || loading}
            >
              {loading ? (
                <img
                  src="/icons/icon_spinner.svg"
                  alt="Loading Info..."
                  className="spinner"
                  width={20}
                />
              ) : (
                "Confirm Deletion"
              )}
            </button>
          </form>
        </div>
      </div>
    );
}
