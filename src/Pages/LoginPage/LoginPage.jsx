import { useState } from "react";
import { useChangePage } from "../../Contexts/ChanePageContext/ChangePageContext";
import { useData } from "../../Contexts/DataContext/DataContext";
import "./LoginPage.css";
import { useCurrentUser } from "../../Contexts/CurrentUserContext/CurrentUserContext";
import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import LogInSpinner from "../../components/Spinner/LogInSpinner";

export default function LoginPage() {
  const [emailInputVal, setEmailInputVal] = useState("");
  const [passwordInputVal, setPasswordInputVal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { changePage } = useChangePage();
  const { data } = useData();
  const { changeCurrentUser } = useCurrentUser();
  const { loggedUser } = useLoggedUser();

  function handleOnSubmit(e) {
    e.preventDefault();
    const isValid = data.map((data) => {
      if (emailInputVal === data.email && passwordInputVal === data.password) {
        changeCurrentUser(data.id);
        changePage("voting-page");
      } else {
        setErrorMessage(`INVALID`);
      }
    });
    return isValid;
  }

  return (
    <main className="LoginPage page">
      {data ? (
        <div className="login-container">
          <div className="title-container">
            <h1>
              Vote <span id="now-span">Now</span>
            </h1>
          </div>

          <div className="form-container">
            <form onSubmit={handleOnSubmit}>
              <div className="name-container center">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={emailInputVal}
                  onChange={(e) => setEmailInputVal(e.target.value)}
                />
              </div>
              <div className="password-container center">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={passwordInputVal}
                  onChange={(e) => setPasswordInputVal(e.target.value)}
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="error">{errorMessage}</div>
        </div>
      ) : (
        <LogInSpinner />
      )}
    </main>
  );
}
