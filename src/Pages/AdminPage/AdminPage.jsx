import "./AdminPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import { useEffect } from "react";
import axios from "../../axiosConfig";
import Spinner from "../../components/Spinner/Spinner";

export default function AdminPage() {
  const { data, changeData, currentUser, totalVotes } = useData();

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
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
