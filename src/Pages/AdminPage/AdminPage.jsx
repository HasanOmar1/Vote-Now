import { useLoggedUser } from "../../Contexts/LoggedUserContext/LoggedUserContext";
import Navbar from "../../components/Navbar/Navbar";

export default function AdminPage() {
  const { loggedUser, getLoggedUser } = useLoggedUser();
  //   console.log(loggedUser);
  return <main className="AdminPage page">{loggedUser && <Navbar />}</main>;
}
