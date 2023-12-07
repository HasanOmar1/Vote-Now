import React from "react";
import { useChangePage } from "../../Contexts/ChanePageContext/ChangePageContext";
import LoginPage from "../LoginPage/LoginPage";
import VotingPage from "../VotingPage/VotingPage";

export default function SetPages() {
  const { currentPage } = useChangePage();
  return (
    <main>
      {currentPage === "login-page" && <LoginPage />}
      {currentPage === "voting-page" && <VotingPage />}
    </main>
  );
}
