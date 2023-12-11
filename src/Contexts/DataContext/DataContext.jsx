import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../axiosConfig";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [votes, setVotes] = useState([0, 0, 0, 0]);
  const [totalVotes, setTotalVotes] = useState(0);
  function changeData(data) {
    setData(data);
  }

  async function submitVote(user) {
    try {
      const response = await axios.put(`/users/${user.id}`, user);
      console.log(`User was updated!`);
      getData();
    } catch (error) {
      console.log(`User was unable to update!`);
    }
  }

  async function getData() {
    try {
      const response = await axios.get("/users");
      setData(response.data);
    } catch (error) {
      console.log(`was unable to fetch users!`);
    }
  }

  useEffect(() => {
    if (data) {
      setCurrentUser(data.find((user) => user?.id === currentUser?.id));
      const cats = ["Chilling Cat", "Model Cat", "Mafia Cat", "Sniper Cat"];
      const amountOfVotes = cats.map((cat) => calcVoteForCat(cat));
      console.log(amountOfVotes);
      setVotes(amountOfVotes);
      setTotalVotes(getTotalVotes());
    }
  }, [data]);

  function getTotalVotes() {
    return data.reduce((acc, cur) => {
      let add = cur.votedFor !== "" ? 1 : 0;
      return acc + add;
    }, 0);
  }

  function calcVoteForCat(catName) {
    let amountOfVotes = 0;
    amountOfVotes = data?.reduce((acc, cur) => {
      if (cur.votedFor === catName) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return amountOfVotes;
  }

  return (
    <DataContext.Provider
      value={{
        data,
        changeData,
        submitVote,
        currentUser,
        setCurrentUser,
        votes,
        totalVotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
