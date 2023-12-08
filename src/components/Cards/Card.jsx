import { useState } from "react";
import "./Card.css";
export default function Card({ img, title }) {
  const [votes, setVotes] = useState(0);
  function handleVoteClick() {
    setVotes((prevVotes) => prevVotes + 1);
  }

  return (
    <div className="Card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={handleVoteClick}>Vote</button>
      <h1>
        Votes: <span className="votes">{votes}</span>
      </h1>
    </div>
  );
}
