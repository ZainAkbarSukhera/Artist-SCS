// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const isAuthenticated = localStorage.getItem("isAuthenticated");

//   // return isAuthenticated ? children : <Navigate to="/dashboard" />;
//   return isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: JSX.Element }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated") || "false");

  return isAuthenticated ? (children ? children : <Outlet />) : <Navigate to="/dashboard/maindashboard" replace />;
};

export default ProtectedRoute;

