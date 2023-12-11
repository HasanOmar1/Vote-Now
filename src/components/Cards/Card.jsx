import { useEffect, useState } from "react";
import "./Card.css";
import { useData } from "../../Contexts/DataContext/DataContext";

export default function Card({ img, title, index, isVoting, setIsVoting }) {
  const [isCardVoting, setIsCardVoting] = useState(false);
  const [catVotes, setCatVotes] = useState(0);
  const { submitVote, currentUser, votes } = useData();

  function handleVoteClick() {
    setIsVoting(true);
    setIsCardVoting(true);
  }
  useEffect(() => {
    setCatVotes(votes[index]);
  }, [votes]);

  function handleAskToChangeVote(catName) {
    console.log("catsname:", catName);
    const updatedUser = { ...currentUser, votedFor: catName };
    console.log("user after update:", updatedUser);
    submitVote(updatedUser);
    setIsCardVoting(false);
    // console.log(userInfo);
  }

  function handleChangeVote() {
    const updatedUser = { ...currentUser, votedFor: "" };
    submitVote(updatedUser);
    setIsVoting(false);
  }
  function cancelVote() {
    setIsVoting(false);
  }

  return (
    <div className="Card">
      <img src={img} alt={title} />
      <h3>{title}</h3>

      {!isVoting && !currentUser.votedFor && (
        <button onClick={handleVoteClick} id="vote-btn">
          Vote
        </button>
      )}

      {isCardVoting && isVoting && (
        <div className={`btns-container`}>
          <button onClick={() => handleAskToChangeVote(title)} id="sure-btn">
            Im Sure
          </button>
          <button id="cancel-btn" onClick={cancelVote}>
            Cancel
          </button>
        </div>
      )}

      {currentUser.votedFor === title && (
        <button id="change-vote-btn" onClick={handleChangeVote}>
          Change Vote
        </button>
      )}

      <h1>
        Votes: <span className="votes">{catVotes}</span>
      </h1>
    </div>
  );
}
