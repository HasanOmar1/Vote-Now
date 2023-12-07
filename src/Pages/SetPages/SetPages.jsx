import React from "react";
import { useChangePage } from "../../Contexts/ChanePageContext/ChangePageContext";
import LoginPage from "../LoginPage/LoginPage";

export default function SetPages() {
  const { currentPage, changePage } = useChangePage();
  return <main>{currentPage === "login-page" && <LoginPage />}</main>;
}
