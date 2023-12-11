import "./VotingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Cards/Card";
import cardsArr from "../../components/Cards/Cards";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useData } from "../../Contexts/DataContext/DataContext";

export default function VotingPage() {
  const [isVoting, setIsVoting] = useState(false);
  const { data, currentUser } = useData();

  console.log(data);

  return (
    <main className="VotingPage page">
      {currentUser ? (
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
                  index={index}
                  isVoting={isVoting}
                  setIsVoting={setIsVoting}
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
