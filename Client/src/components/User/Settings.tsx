import { useState } from "react";
import { Outlet } from "react-router-dom";

const Settings = () => {
  const settingOptions = [
    {
      label: "Profile",
    },
    {
      label: "Account",
    },
    {
      label: "Password",
    },
    {
      label: "Subscribed Blogs",
    },
  ];

  const [activeOption, setActiveOption] = useState(settingOptions[0].label);
  return (
    <div className="dark:bg-black h-screen pt-10 pl-10">
      <div className=" flex flex-col gap-4">
        <h1 className="text-white text-3xl font-semibold">Settings</h1>
        <p className="text-gray-500 text-lg font-semibold">
          Manage your account settings and set Email Preferences.
        </p>
      </div>
      <div className="divider divider-end"></div>
      <div className="flex w-[650px] pt-10">
        <div className="w-2/5 flex flex-col gap-6">
          {settingOptions.map((option) => {
            return (
              <div
                className={`text-md font-semibold text-white px-3 py-2 rounded-lg hover:bg-white/20 hover:bg-opacity-50 cursor-pointer ${
                  activeOption === option.label
                    ? "bg-white/20 bg-opacity-50"
                    : ""
                }`}
                onClick={() => setActiveOption(option.label)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
        <div className="w-3/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
