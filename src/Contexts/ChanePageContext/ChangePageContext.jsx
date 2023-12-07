import { createContext, useContext, useState } from "react";

export const ChangePage = createContext();

export default function ChangePageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("login-page");

  function changePage(pageName) {
    setCurrentPage(pageName);
  }
  return (
    <ChangePage.Provider value={{ currentPage, changePage }}>
      {children}
    </ChangePage.Provider>
  );
}

export const useChangePage = () => useContext(ChangePage);
