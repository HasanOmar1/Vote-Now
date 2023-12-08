import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import "./Navbar.css";
export default function Navbar() {
  const { loggedUser } = useLoggedUser();

  return (
    <nav className="Navbar">
      <div className="logo-container">
        <h1>
          Vote <span id="now-span">Now</span>
        </h1>
      </div>
      <h3 id="logged-user">{loggedUser}</h3>
    </nav>
  );
}
