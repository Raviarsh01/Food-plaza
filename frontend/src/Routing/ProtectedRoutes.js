import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth);

  return user?.userData ? (
    children
  ) : (
    <Navigate to={`/login?from=${pathname.slice(1)}`} />
  );
};

export default ProtectedRoutes;
