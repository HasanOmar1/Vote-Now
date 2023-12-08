import { createContext, useContext, useState } from "react";

export const HasVotedContext = createContext();

export default function HasVotedProvider({ children }) {
  const [isVoted, setIsVoted] = useState(false);

  function changeVoteStatus() {
    setIsVoted((prevStatus) => !prevStatus);
  }

  return (
    <HasVotedContext.Provider value={{ isVoted, changeVoteStatus }}>
      {children}
    </HasVotedContext.Provider>
  );
}

export const setHasVoted = () => useContext(HasVotedContext);
