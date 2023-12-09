import { useEffect, useRef, useState } from "react";
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
  index,
}) {
  const [votes, setVotes] = useState(0);
  const [voteButton, setVoteButton] = useState(false);
  const [changeVote, setChangeVote] = useState(false);

  const { currentUser } = useCurrentUser();
  const { isVoted, changeVoteStatus } = setHasVoted();
  const { userInfo, changeUserInfo } = getUserInfo();

  function handleVoteClick() {
    setVoteButton(true);
    setIsCurrentlyVoting(true);
    setChangeVote(false);
  }

  function handleAskToChangeVote() {
    setChangeVote(true);
    setIsCurrentlyVoting(true);
    setVotes((prevVote) => {
      const newVotes = +prevVote + 1;
      localStorage.setItem(`card-${index}-votes`, newVotes);
      return newVotes;
    });
    changeVoteStatus();
  }
  function handleChangeVote() {
    setVoteButton(false);
    setIsCurrentlyVoting(false);
    setVotes((prevVote) => {
      const newVotes = +prevVote - 1;
      localStorage.setItem(`card-${index}-votes`, newVotes);
      return newVotes;
    });
    changeVoteStatus();
  }

  function cancelVote() {
    setVoteButton(false);
    setIsCurrentlyVoting(false);
  }
  useEffect(() => {
    const currentVotes = localStorage.getItem(`card-${index}-votes`);
    if (currentVotes) {
      setVotes(currentVotes);
    }
  }, []);

  useEffect(() => {
    const voteButtonData = localStorage.getItem(`vote-${index}-Button`);
    if (voteButtonData) {
      setVoteButton(JSON.parse(voteButtonData));
    }
  }, []);

  useEffect(() => {
    const changeVoteButtonData = localStorage.getItem(
      `change-${index}-VoteButton`
    );
    if (changeVoteButtonData) {
      setChangeVote(JSON.parse(changeVoteButtonData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`vote-${index}-Button`, JSON.stringify(voteButton));
  }, [voteButton]);

  useEffect(() => {
    localStorage.setItem(
      `change-${index}-VoteButton`,
      JSON.stringify(changeVote)
    );
  }, [changeVote]);

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
