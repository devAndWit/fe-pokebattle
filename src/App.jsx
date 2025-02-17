import { Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext.jsx";

//free visitor
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage";
import Signup from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";

//closed user
import ProtectedLayout from "./layouts/ProtectedLayout";
import UserPage from "./pages/UserPage.jsx";
import BattleContainer from "./components/BattlePage/BattleContainer.jsx";
import PokeLuck from "./components/PokeLuck.jsx";
import ArenaPage from "./pages/ArenaPage.jsx";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Layout für nicht-authentifizierte Nutzer */}
      {!isAuthenticated ? (
        <Route path="/" element={<MainLayout />}>
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
          <Route path="/battle" element={<BattleContainer />} />
          <Route path="/luck" element={<PokeLuck />} />
          <Route path="*" element={<div>Seite nicht gefunden</div>} />
          <Route path="/arena" element={<ArenaPage />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
