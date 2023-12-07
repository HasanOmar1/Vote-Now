import { useChangePage } from "../../Contexts/ChanePageContext/ChangePageContext";
import "./LoginPage.css";

export default function LoginPage() {
  const { changePage } = useChangePage();

  function handleOnSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="LoginPage page">
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
              <input type="email" name="email" id="email" required />
            </div>
            <div className="password-container center">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
}
