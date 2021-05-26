import { useAuth } from "../../util/auth";
import Nav from "./Nav";

function Navbar() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <Nav exact to="/">
          Home
        </Nav>
        {auth.isLoggedIn() ? <UserNavs auth={auth} /> : <GuestNavs />}
      </ul>
    </nav>
  );
}

// Renders navigation controls intended for authenticated users
function UserNavs({ auth }) {
  return (
    <>
      <Nav to="/private">Private</Nav>
      <Nav to="/myprofile">Profile</Nav>
      <button
        variant="contained"
        style={{ float: "right" }}
        color="primary"
        className="float-right"
        onClick={() => auth.logout()}
      >
        Logout
      </button>
    </>
  );
}

// Renders navigation controls intended for user's that aren't logged in.
function GuestNavs() {
  return (
    <>
      <Nav to="/login">Login</Nav>
      <Nav to="/signup">Sign Up</Nav>
    </>
  );
}

export default Navbar;
