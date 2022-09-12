import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../methods/use-auth";
import LandingPage from "./LandingPage";
const IsLoggedIn = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();
  console.log(auth);
  return auth.user ? (
    children
  ) : location.pathname == "/welcome" ? (
    <LandingPage></LandingPage>
  ) : (
    <Navigate to="/welcome" />
  );
};

export default IsLoggedIn;
