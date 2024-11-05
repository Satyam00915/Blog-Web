import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import SignIn from "./Pages/Auth";
import Profile from "./components/User/Profile";
import Settings from "./components/User/Settings";
import Account from "./components/User/Account";
import Password from "./components/User/Password";
import ProfBox1 from "./components/User/ProfBox1";
import Saved from "./components/User/Saved";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />}>
              <Route path="profile" element={<ProfBox1 />} />
              <Route path="account" element={<Account />} />
              <Route path="password" element={<Password />} />
              <Route path="saved" element={<Saved />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
