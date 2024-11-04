import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { ModeToggle } from "../mode-toggle";

const Settings = () => {
  const navigate = useNavigate();
  const settingOptions = [
    {
      label: "Profile",
      path: "profile",
    },
    {
      label: "Account",
      path: "account",
    },
    {
      label: "Password",
      path: "password",
    },
    {
      label: "Subscribed Blogs",
      path: "subscribed",
    },
  ];

  const [activeOption, setActiveOption] = useState(settingOptions[0].label);
  return (
    <div className="dark:bg-black bg-white h-full w-full pt-10 pl-10 pb-10">
      <div className=" flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-black dark:text-white text-3xl font-semibold">
            Settings
          </h1>
          <p className="text-gray-500 text-lg font-semibold">
            Manage your account settings and set Email Preferences.
          </p>
        </div>
        <div className="px-5">
          <ModeToggle />
        </div>
      </div>
      <div className="divider divider-end"></div>
      <div className="flex w-full pt-10">
        <div className="w-1/5  flex flex-col gap-6">
          {settingOptions.map((option) => {
            return (
              <div
                className={`text-md font-semibold text-black dark:text-white px-3 py-2 rounded-lg dark:hover:bg-white/20 hover:bg-black/20 hover:bg-opacity-50 cursor-pointer ${
                  activeOption === option.label
                    ? "bg-white/20 bg-opacity-50"
                    : ""
                }`}
                onClick={() => {
                  setActiveOption(option.label);
                  navigate(option.path);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
        <div className="divider divider-neutral dark:divider divider-horizontal"></div>
        <div className="h-screen w-4/5">
          <Outlet />
          {/* <ProfBox /> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
