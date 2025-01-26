import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { paths } from "../utils/paths";

const ProtectedRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate to={`${paths.login}?from=${pathname.slice(1)}`} />
  );
};

export default ProtectedRoutes;
