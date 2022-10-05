import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const ProvideUserInfo = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
export function useProvideAuth() {
  const [user, setUser] = useState(window.localStorage.getItem("jwt") != null);
  const navigate = useNavigate();

  //For now, these functions are not implementing their true purpose.
  function signIn(name, password) {
    //FIXME: server does not respond with neccessary headers, can't proceed with API implementation.
    console.log(name, password);

    fetch("http://localhost:8090/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        password: password,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data != "Invalid username or password.") {
          window.localStorage.setItem("jwt", data);
          setUser({ name: name });
          navigate("/home");
        } else {
          console.log(data);
          setUser(false);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Server Down!");
        setUser(false);
      });
  }
  function signUp(name, email, password) {
    signIn(name, email, password);
    setUser(true);
  }
  function signOut() {
    setUser(false);
    window.localStorage.removeItem("jwt");
  }
  useEffect(() => {
    const unsubscribe = () => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log(user + " set to false");
        setUser(false);
      }
    };
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signIn,
    signUp,
    signOut,
  };
}
