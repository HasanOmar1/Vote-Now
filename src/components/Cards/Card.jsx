import { useRef, useState } from "react";
import "./Card.css";
export default function Card({ img, title }) {
  const [votes, setVotes] = useState(0);
  const [voteButton, setVoteButton] = useState(false);

  function handleVoteClick() {
    setVoteButton(true);
  }

  function handleChangeVote() {
    setVoteButton(false);
  }

  return (
    <div className="Card">
      <img src={img} alt={title} />
      <h3>{title}</h3>

      <button
        onClick={handleVoteClick}
        id="vote-btn"
        className={voteButton && "hide"}
      >
        Vote
      </button>

      {voteButton && (
        <div className={`btns-container ${!voteButton && "hide"}`}>
          <button onClick={handleChangeVote} id="sure-btn">
            Im Sure
          </button>
          <button onClick={handleChangeVote} id="cancel-btn">
            Cancel
          </button>
        </div>
      )}

      <h1>
        Votes: <span className="votes">{votes}</span>
      </h1>
    </div>
  );
}
