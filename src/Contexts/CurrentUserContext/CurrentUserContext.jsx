import { createContext, useContext, useState } from "react";

export const CurrentUserContext = createContext();

export default function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");

  function changeCurrentUser(newUser) {
    setCurrentUser(newUser);
  }
  return (
    <CurrentUserContext.Provider value={{ currentUser, changeCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUser = () => useContext(CurrentUserContext);
