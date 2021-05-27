import { useAuth } from "../../util/auth";
import Nav from "./Nav";

import { Navbar } from "react-bootstrap";
function Navigation() {
  const auth = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Chromesthesia </Navbar.Brand>
      {auth.isLoggedIn() ? <UserNavs auth={auth} /> : <GuestNavs />}
    </Navbar>
  );
}

// Renders navigation controls intended for authenticated users
function UserNavs({ auth }) {
  return (
    <>
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

export default Navigation;
