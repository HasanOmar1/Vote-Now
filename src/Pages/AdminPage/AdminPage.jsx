import "./AdminPage.css";
import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import Navbar from "../../components/Navbar/Navbar";
import { useData } from "../../Contexts/DataContext/DataContext";
import { useState } from "react";

export default function AdminPage() {
  const { loggedUser, getLoggedUser } = useLoggedUser();
  const { data } = useData();

  const [fetchDataInfo, setFetchDataInfo] = useState("");

  if (data) {
    const info = data.map((data) => {
      const username = data.username;
      const email = data.email;
      const voteStatus = data.hasVoted;
    });
  }
  // console.log(loggedUser);
  return (
    <main className="AdminPage page">
      {/* {loggedUser && <Navbar />} */}
      {data && (
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
              {/* <h3>{username}</h3>
              <h3>hasan@gmail.com</h3>
              <h3>Not Voted</h3> */}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
