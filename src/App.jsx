import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axiosConfig";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SetPages from "./Pages/SetPages/SetPages";
import ChangePageProvider from "./Contexts/ChanePageContext/ChangePageContext";
import VotingPage from "./Pages/VotingPage/VotingPage";
import VotesCounterProvider from "./Contexts/VotesCounterContext/VotesCounterContext";
function App() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get("/users");
  //       setData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
