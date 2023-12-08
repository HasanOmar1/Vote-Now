import React, { createContext, useContext, useState } from "react";

export const LoggedUserContext = createContext();

export default function LoggedUserProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState("");

  function getLoggedUser(user) {
    setLoggedUser(user);
  }

  return (
    <LoggedUserContext.Provider value={{ loggedUser, getLoggedUser }}>
      {children}
    </LoggedUserContext.Provider>
  );
}

export const useLoggedUser = () => useContext(LoggedUserContext);
