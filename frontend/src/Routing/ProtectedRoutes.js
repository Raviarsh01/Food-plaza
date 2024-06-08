import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.LoginReducer);

  return user?.userData ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
