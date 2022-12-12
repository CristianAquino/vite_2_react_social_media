import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isLogged, children }) => {
  if (!isLogged) return <Navigate to={"/"} />;
  return children ? children : <Outlet />;
};
