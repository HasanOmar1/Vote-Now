import "./VotingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Cards/Card";
import cardsArr from "../../components/Cards/Cards";
import { setVotesCounter } from "../../Contexts/VotesCounterContext/VotesCounterContext";

export default function VotingPage() {
  return (
    <main className="VotingPage page">
      <Navbar />
      <h1 className="page-title">
        Which cat do you think is the <span id="cool-span">Coolest</span> one?
      </h1>
      <div className="cards">
        {cardsArr.map((card, index) => {
          return <Card key={index} title={card.title} img={card.img} />;
        })}
      </div>
    </main>
  );
}
