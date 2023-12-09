import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import VotingPage from "../../Pages/VotingPage/VotingPage";
import AdminPage from "../../Pages/AdminPage/AdminPage";
import { useChangePage } from "../../Contexts/ChanePageContext/ChangePageContext";
import { getUserInfo } from "../../Contexts/UserInfoContext/UserInfoContext";
import { useState } from "react";

export default function Navbar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const { loggedUser } = useLoggedUser();
  const { changePage } = useChangePage();
  const { userInfo } = getUserInfo();

  function showPanel() {
    setIsPanelOpen((prevState) => !prevState);
  }

  function logOut() {
    window.location = window.location;
  }

  function directToVotePage() {
    changePage("voting-page");
  }

  function directToAdminPage() {
    changePage("admin-page");
  }
  return (
    <nav className="Navbar">
      <div className="logo-container">
        <h1>
          Vote <span id="now-span">Now</span>
        </h1>
      </div>

      <div className="panels">
        <div className="name-container" onClick={showPanel}>
          <h3>
            <span className="user-icon">
              <FaRegUserCircle />
            </span>
            {loggedUser}
            <span className="arrow-down-icon">
              <BiSolidDownArrow />
            </span>
          </h3>
        </div>
        <div className={`hide ${isPanelOpen ? "open-panels" : ""}`}>
          <div className="log-out-panel" onClick={logOut}>
            <h3>Logout</h3>
          </div>
          {userInfo.role === "admin" && (
            <div>
              <div className="vote-panel" onClick={directToVotePage}>
                <h3>Vote</h3>
              </div>

              <div className="admin-panel" onClick={directToAdminPage}>
                <h3>Admin</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
