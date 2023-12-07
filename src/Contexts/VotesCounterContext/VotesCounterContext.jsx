import { createContext, useContext, useState } from "react";

export const VotesCounterContext = createContext();

export default function VotesCounterProvider({ children }) {
  const [votesCounter, setVotesCounter] = useState(0);

  function addToCounter() {
    setVotesCounter((prevCount) => prevCount + 1);
  }
  return (
    <VotesCounterContext.Provider value={{ votesCounter, addToCounter }}>
      {children}
    </VotesCounterContext.Provider>
  );
}

export const setVotesCounter = () => useContext(VotesCounterContext);
