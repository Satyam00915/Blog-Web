import { create } from "zustand";

type State = {
  FirstName: String;
  Email: String;
  Password: String;
};

type Action = {
  SetFirstName: (FirstName: State["FirstName"]) => void;
  SetEmail: (Email: State["Email"]) => void;
  SetPassword: (Password: State["Password"]) => void;
};

export const useUserStore = create<State & Action>((set) => ({
  FirstName: "",
  Email: "",
  Password: "",

  SetFirstName: (FirstName) => set({ FirstName }),
  SetEmail: (Email) => set({ Email }),
  SetPassword: (Password) => set({ Password }),
}));
