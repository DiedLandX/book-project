import { Navigate, Outlet } from "react-router";
import React from "react";
import { useAuth } from "../methods/use-auth";

const RequireAuth = () => {
  const auth = useAuth();
  return auth.user ? <Outlet></Outlet> : <Navigate to="/welcome"></Navigate>;
};

export default RequireAuth;
