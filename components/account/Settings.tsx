"use client";

import { FormEvent, useEffect, useState } from "react";
import MainBox from "./MainBox";
import "./account.css";
import profilesDB from "@/supabase/database/handleProfiles";
import supabase from "@/supabase/config";

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
}

export function DangerZone({ userProfile, className }: DZProps) {
  return (
    <MainBox title="Danger Zone" className="mt-5">
      <h1>hello</h1>
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
