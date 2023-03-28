import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";

export default function PrivateRoute() {
  const { user } = useAuthContext();
  if (!user) return <Navigate to="/login" />;
  if (user) return <Navigate to="/" />;
  return <Outlet />;
}
