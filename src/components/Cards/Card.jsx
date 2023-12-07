import { setVotesCounter } from "../../Contexts/VotesCounterContext/VotesCounterContext";
import "./Card.css";
export default function Card({ img, title }) {
  const { votesCounter, addToCounter } = setVotesCounter();
  return (
    <div className="Card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={addToCounter}>Vote</button>
      <h1>
        Votes: <span className="votes">{votesCounter}</span>
      </h1>
    </div>
  );
}
