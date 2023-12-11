import React from "react";
import { useChangePage } from "../../Contexts/ChangePageContext/ChangePageContext";
import LoginPage from "../LoginPage/LoginPage";
import VotingPage from "../VotingPage/VotingPage";
import AdminPage from "../AdminPage/AdminPage";

export default function SetPages() {
  const { currentPage } = useChangePage();
  return (
    <main>
      {currentPage === "login-page" && <LoginPage />}
      {currentPage === "voting-page" && <VotingPage />}
      {currentPage === "admin-page" && <AdminPage />}
    </main>
  );
}
