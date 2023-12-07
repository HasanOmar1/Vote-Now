import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axiosConfig/instance";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/users");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function handleCreate() {
    try {
      const response = await axios.post("/users", { role: admin });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>hi</h1>
    </>
  );
}

export default App;
