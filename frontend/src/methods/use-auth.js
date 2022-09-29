import React, { useState, useEffect, useContext, createContext } from "react";
import IsLoggedIn from "../components/IsLoggedIn";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      <IsLoggedIn> {children} </IsLoggedIn>
    </authContext.Provider>
  );
}

export function useProvideAuth() {
  const [user, setUser] = useState(false);
  //For now, these functions are not implementing their true purpose.
  function signIn(name, email, password) {
    //FIXME: server does not respond with neccessary headers, can't proceed with API implementation.
    fetch("http://localhost:8090/login", {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      credentials: "include",
      body: {
        username: "raw",
        password: "war",
      },
    })
      .then((response) => response)
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
        console.log("Server Down!");
      });
    let user = { name: name, email: email, password: password };
    setUser(user);
  }
  function signUp(name, email, password) {
    signIn(name, email, password);
    setUser(true);
  }
  function signOut() {
    setUser(false);
  }
  useEffect(() => {
    const unsubscribe = () => {
      if (user) {
        setUser(user);
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
