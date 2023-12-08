import "./VotingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Cards/Card";
import cardsArr from "../../components/Cards/Cards";
import { useCurrentUser } from "../../Contexts/CurrentUserContext/CurrentUserContext";
import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import Spinner from "../../components/Spinner/Spinner";

export default function VotingPage() {
  const [isCurrentlyVoting, setIsCurrentlyVoting] = useState(false);

  const { loggedUser, getLoggedUser } = useLoggedUser();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    try {
      async function fetchUser() {
        const response = await axios.get(`/users/${currentUser}`);
        // console.log(response.data);
        getLoggedUser(response.data.username);
      }
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="VotingPage page">
      {loggedUser ? (
        <div>
          <Navbar />
          <h1 className="page-title">
            Which cat do you think is the <span id="cool-span">Coolest</span>{" "}
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
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
