// import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./utils/routesPage";
import SocialMedia from "./pages/SocialMedia";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import { ProtectedRoute } from "./Routes/ProtectedRouter";
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state) => state.authSlice);
  return (
    <Routes>
      <Route path={routes.home} element={<SocialMedia />}>
        <Route index element={<Auth />} />
        <Route
          path="home"
          element={
            <ProtectedRoute isLogged={token}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path={routes.error}
        element={<Navigate replace to={routes.home} />}
      />
    </Routes>
  );
}

export default App;
