import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paths } from "../utils/paths";

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const role = user?.userData?.Role;

  return role == 0 ? <>{children}</> : <Navigate to={paths.home} />;
};

export default AdminRoute;
