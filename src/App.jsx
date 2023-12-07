import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axiosConfig";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SetPages from "./Pages/SetPages/SetPages";
import ChangePageProvider from "./Contexts/ChanePageContext/ChangePageContext";
import VotingPage from "./Pages/VotingPage/VotingPage";
import VotesCounterProvider from "./Contexts/VotesCounterContext/VotesCounterContext";
import { useData } from "./Contexts/DataContext/DataContext";
function App() {
  const { data, changeData } = useData();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/users");
        changeData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <ChangePageProvider>
        <VotesCounterProvider>
          <SetPages />
          {/* <LoginPage /> */}
          {/* <VotingPage /> */}
        </VotesCounterProvider>
      </ChangePageProvider>
    </>
  );
}

export default App;
