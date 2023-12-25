import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const role = localStorage.getItem("Role");

  return role === 0 ? <>{children}</> : <Navigate to="/" />;
};

export default AdminRoute;
