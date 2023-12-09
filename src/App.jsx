import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axiosConfig";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SetPages from "./Pages/SetPages/SetPages";
import ChangePageProvider from "./Contexts/ChanePageContext/ChangePageContext";
import VotingPage from "./Pages/VotingPage/VotingPage";
import { useData } from "./Contexts/DataContext/DataContext";
import LoggedUserProvider from "./Contexts/LoggedUserContext/LoggedUserContext";
import UserInfoProvider from "./Contexts/UserInfoContext/UserInfoContext";
import HasVotedProvider from "./Contexts/HasVotedContext/HasVotedContext";
import AdminPage from "./Pages/AdminPage/AdminPage";
import TotalVotesProvider from "./Contexts/TotalVotesContext/TotalVotesContext";
function App() {
  const { data, changeData } = useData();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/users");
        changeData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // console.log(data);
  return (
    <>
      <UserInfoProvider>
        <ChangePageProvider>
          <LoggedUserProvider>
            <HasVotedProvider>
              <TotalVotesProvider>
                <SetPages />
              </TotalVotesProvider>
            </HasVotedProvider>
          </LoggedUserProvider>
        </ChangePageProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
