import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.adminAuth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default AdminProtectedRoute;
