import { useAuth } from "../../util/auth";
import Nav from "./Nav";

import { Button, Navbar } from "react-bootstrap";
function Navigation() {
  const auth = useAuth();
  return (
    // expand="lg" bg="dark" variant="dark"
    <Navbar className="nav-style" >
      <Navbar.Brand className="home-button" href="/">Home </Navbar.Brand>
      {auth.isLoggedIn() ? <UserNavs auth={auth} /> : <GuestNavs />}
    </Navbar>
  );
}
{/* <Button to="/myprofile" className = "nav-profile">Profile</Button> */}
<button
   className="nav-profile"
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/myprofile';
      }}
> Profile</button>
// Renders navigation controls intended for authenticated users
function UserNavs({ auth }) {
  return (
    <>
      <button
   className="nav-profile"
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/myprofile';
      }}
> Profile</button>
      <button
        variant="contained"
        style={{ float: "right" }}
        color="primary"
        className="float-right md-auto nav-buttons"
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
    <div>
      <Nav
        className="justify-content-end"
        style={{ width: "100%" }}
        to="/login"
      >
        Login
      </Nav>
      <br></br>
      <Nav to="/signup">Sign Up</Nav>
    </div>
  );
}

export default Navigation;
