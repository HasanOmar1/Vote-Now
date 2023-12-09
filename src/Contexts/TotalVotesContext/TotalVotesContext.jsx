import { createContext, useContext, useState } from "react";

export const TotalVotesContext = createContext();

export default function TotalVotesProvider({ children }) {
  const [totalVotes, setTotalVotes] = useState(0);

  function addToTotalVotes(newValue) {
    setTotalVotes(newValue);
  }
  return (
    <TotalVotesContext.Provider value={{ totalVotes, addToTotalVotes }}>
      {children}
    </TotalVotesContext.Provider>
  );
}

export const getTotalVotes = () => useContext(TotalVotesContext);
