import { useRef, useState } from "react";
import "./Card.css";
import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import { getUserInfo } from "../../Contexts/UserInfoContext/UserInfoContext";
import { setHasVoted } from "../../Contexts/HasVotedContext/HasVotedContext";
import axios from "../../axiosConfig";
import { useCurrentUser } from "../../Contexts/CurrentUserContext/CurrentUserContext";
export default function Card({
  img,
  title,
  isCurrentlyVoting,
  setIsCurrentlyVoting,
}) {
  const [votes, setVotes] = useState(0);
  const [voteButton, setVoteButton] = useState(false);
  const [changeVote, setChangeVote] = useState(false);

  const { currentUser } = useCurrentUser();
  const { isVoted, changeVoteStatus } = setHasVoted();
  const { userInfo, changeUserInfo } = getUserInfo();

  // console.log(userInfo.hasVoted);

  function handleVoteClick() {
    setVoteButton(true);
    setIsCurrentlyVoting(true);
    setChangeVote(false);
  }

  function handleAskToChangeVote() {
    setChangeVote(true);
    setIsCurrentlyVoting(true);
    setVotes((prevVote) => prevVote + 1);

    changeVoteStatus();
  }
  function handleChangeVote() {
    setVoteButton(false);
    setIsCurrentlyVoting(false);
    setVotes((prevVote) => prevVote - 1);
    changeVoteStatus();
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
