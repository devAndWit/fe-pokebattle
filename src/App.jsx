import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import Homepage from "./pages/Homepage.jsx";
import Signup from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";

function App() {
  console.log("TEST");
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="*" element={<div>Seite nicht</div>} />
    </Routes>
  );
}

export default App;
