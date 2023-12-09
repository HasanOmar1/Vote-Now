import "./VotingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Cards/Card";
import cardsArr from "../../components/Cards/Cards";
import { useCurrentUser } from "../../Contexts/CurrentUserContext/CurrentUserContext";
import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import Spinner from "../../components/Spinner/Spinner";
import { getUserInfo } from "../../Contexts/UserInfoContext/UserInfoContext";
import { setHasVoted } from "../../Contexts/HasVotedContext/HasVotedContext";
import { useData } from "../../Contexts/DataContext/DataContext";

export default function VotingPage() {
  const [isCurrentlyVoting, setIsCurrentlyVoting] = useState(false);

  const { isVoted, changeVoteStatus } = setHasVoted();
  const { userInfo, changeUserInfo } = getUserInfo();
  const { loggedUser, getLoggedUser } = useLoggedUser();
  const { currentUser } = useCurrentUser();
  const { data, changeData } = useData();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/users");
        changeData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    try {
      async function fetchUser() {
        const response = await axios.get(`/users/${currentUser}`);
        changeUserInfo(response.data);
        getLoggedUser(response.data.username);
      }
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function updateVoteStatus() {
    try {
      const response = await axios.put(`/users/${currentUser}`, {
        hasVoted: isVoted,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  updateVoteStatus();

  return (
    <main className="VotingPage page">
      {/* {loggedUser ? (
        <div>
          <Navbar />
          <h1 className="page-title">
            Which cat do you think is the <span id="cool-span">Coolest</span>
            one?
          </h1>
          <div className="cards">
            {cardsArr.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  img={card.img}
                  isCurrentlyVoting={isCurrentlyVoting}
                  setIsCurrentlyVoting={setIsCurrentlyVoting}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Spinner />
      )} */}
      <Navbar />
      <h1 className="page-title">
        Which cat do you think is the <span id="cool-span">Coolest</span>
        one?
      </h1>
      <div className="cards">
        {cardsArr.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              img={card.img}
              isCurrentlyVoting={isCurrentlyVoting}
              setIsCurrentlyVoting={setIsCurrentlyVoting}
              index={index}
            />
          );
        })}
      </div>
    </main>
  );
}
