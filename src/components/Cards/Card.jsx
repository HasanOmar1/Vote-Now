import { useRef, useState } from "react";
import "./Card.css";
export default function Card({
  img,
  title,
  isCurrentlyVoting,
  setIsCurrentlyVoting,
}) {
  const [votes, setVotes] = useState(0);
  const [voteButton, setVoteButton] = useState(false);
  const [changeVote, setChangeVote] = useState(false);

  function handleVoteClick() {
    setVoteButton(true);
    setIsCurrentlyVoting(true);
    setChangeVote(false);
  }

  function handleAskToChangeVote() {
    setChangeVote(true);
    setIsCurrentlyVoting(true);
    setVotes((prevVote) => prevVote + 1);
  }
  function handleChangeVote() {
    setVoteButton(false);
    setIsCurrentlyVoting(false);
    setVotes((prevVote) => prevVote - 1);
  }

  function cancelVote() {
    setVoteButton(false);
    setIsCurrentlyVoting(false);
  }

  return (
    <div className="Card">
      <img src={img} alt={title} />
      <h3>{title}</h3>

      {!voteButton && !isCurrentlyVoting && (
        <button
          onClick={handleVoteClick}
          id="vote-btn"
          className={voteButton ? "hide" : ""}
        >
          Vote
        </button>
      )}

      {voteButton && (
        <div
          className={`btns-container ${
            (!voteButton && "hide") || (changeVote && "hide")
          }`}
        >
          <button onClick={handleAskToChangeVote} id="sure-btn">
            Im Sure
          </button>
          <button id="cancel-btn" onClick={cancelVote}>
            Cancel
          </button>
        </div>
      )}
      {changeVote && (
        <button
          id="change-vote-btn"
          className={!voteButton ? "hide" : ""}
          onClick={handleChangeVote}
        >
          Change Vote
        </button>
      )}

      <h1>
        Votes: <span className="votes">{votes}</span>
      </h1>
    </div>
  );
}
