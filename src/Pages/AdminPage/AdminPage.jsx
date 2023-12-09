import "./AdminPage.css";
import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import Navbar from "../../components/Navbar/Navbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import Spinner from "../../components/Spinner/Spinner";

export default function AdminPage() {
  const { loggedUser, getLoggedUser } = useLoggedUser();
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

  return (
    <main className="AdminPage page">
      {/* {loggedUser && <Navbar />} */}
      {data && loggedUser ? (
        <div>
          <Navbar />
          <h1 className="title">Admin Panel</h1>
          <div className="data-info">
            <div className="info-container">
              {data.map((data, i) => {
                return (
                  <div key={i} className="data-container">
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
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
