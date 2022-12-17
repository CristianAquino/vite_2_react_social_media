// import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./Routes/ProtectedRouter";
import { useSelector } from "react-redux";
import routes from "./utils/routesPage";
import SocialMedia from "./pages/SocialMedia";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";

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
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute isLogged={token}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.chat}
          element={
            <ProtectedRoute isLogged={token}>
              <Chat />
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
