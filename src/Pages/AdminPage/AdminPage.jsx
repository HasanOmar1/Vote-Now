import "./AdminPage.css";
import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import Navbar from "../../components/Navbar/Navbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import { useEffect } from "react";
import axios from "../../axiosConfig";
import Spinner from "../../components/Spinner/Spinner";
import { getTotalVotes } from "../../Contexts/TotalVotesContext/TotalVotesContext";

export default function AdminPage() {
  const { loggedUser } = useLoggedUser();
  const { data, changeData } = useData();
  const { totalVotes } = getTotalVotes();

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
      {data && loggedUser ? (
        <div>
          <Navbar />
          <h1 className="title">Admin Panel</h1>
          <div className="data-info">
            <div className="info-container">
              {data.map((data, i) => {
                return (
                  <div key={i} className={`data-container`}>
                    <div className="username-container">
                      <h3>{data.username}</h3>
                    </div>
                    <div className="email-container">
                      <h3>{data.email}</h3>
                    </div>
                    <div className="vote-status-container">
                      <h3>{data.hasVoted ? `Voted` : `Not Voted`}</h3>
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
