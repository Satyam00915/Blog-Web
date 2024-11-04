import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import SignIn from "./Pages/Auth";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
