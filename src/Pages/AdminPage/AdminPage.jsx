import "./AdminPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import { useEffect } from "react";
import axios from "../../axiosConfig";
import Spinner from "../../components/Spinner/Spinner";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import cardsArr from "../../components/Cards/Cards";

export default function AdminPage() {
  const { data, changeData, currentUser, totalVotes, votes } = useData();

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

  return (
    <main className="AdminPage page">
      {data && currentUser ? (
        <div>
          <Navbar />
          <h1 className="title">Admin Panel</h1>
          <div className="data-info">
            <div className="info-container">
              {data.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={`data-container ${
                      data.votedFor !== "" ? "green" : ""
                    }`}
                  >
                    <div className="username-container">
                      <h3>{data.username}</h3>
                    </div>
                    <div className="email-container">
                      <h3>{data.email}</h3>
                    </div>
                    <div className="vote-status-container">
                      <h3>{data.votedFor !== "" ? `Voted` : `Not Voted`}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <h1 className="total-votes">Total Votes : {totalVotes}</h1>

          <div className="chart">
            <Bar
              data={{
                labels: cardsArr.map((cat) => cat.title),
                datasets: [
                  {
                    label: "Total Votes",
                    data: votes.map((vote) => vote),
                    backgroundColor: [
                      "#97008e",
                      "#90fc0f",
                      "#77aee9",
                      "#ebf369",
                    ],

                    borderRadius: 10,
                  },
                ],
              }}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
