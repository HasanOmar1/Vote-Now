import { useEffect } from "react";
import "./App.css";
import axios from "./axiosConfig";
import SetPages from "./Pages/SetPages/SetPages";
import ChangePageProvider from "./Contexts/ChangePageContext/ChangePageContext";
import { useData } from "./Contexts/DataContext/DataContext";
import TotalVotesProvider from "./Contexts/TotalVotesContext/TotalVotesContext";
function App() {
  const { changeData } = useData();

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

  return (
    <>
      <ChangePageProvider>
        <TotalVotesProvider>
          <SetPages />
        </TotalVotesProvider>
      </ChangePageProvider>
    </>
  );
}

export default App;
