import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

//free visitor
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage";
import Signup from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";

//closed user
import ProtectedLayout from "./layouts/ProtectedLayout";
import UserPage from "./pages/UserPage.jsx";
import BattlePage from "./components/BattlePage.jsx";
import PokeLuck from "./components/PokeLuck.jsx";

// closed blanko
import BlankoPage from "./layouts/BlankoPage.jsx";
import ArenaPage from "./pages/ArenaPage.jsx";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* Layout für nicht-authentifizierte Nutzer */}
      {!isAuthenticated ? (
        <Route
          element={
            <>
              <b>free</b>
              <MainLayout />
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<div>Seite nicht gefunden</div>} />
        </Route>
      ) : (
        /* Layout für authentifizierte Nutzer */
        <Route
          element={
            <>
              <b>private</b>
              <ProtectedLayout />
            </>
          }
        >
          <Route index element={<UserPage />} />
          <Route path="/battle" element={<BattlePage />} />
          <Route path="/luck" element={<PokeLuck />} />
          <Route path="*" element={<div>Seite nicht gefunden</div>} />
        </Route>
      )}

      <Route element={<BlankoPage />}>
        <Route path="/arena" element={<ArenaPage />} />
        <Route path="*" element={<div>Seite nicht gefunden</div>} />
      </Route>
    </Routes>
  );
}

export default App;
