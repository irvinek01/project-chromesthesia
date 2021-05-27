import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ to, exact = false, children }) {
  return (
    <NavLink exact={exact} to={to} activeClassName={styles.active}>
      {children}
    </NavLink>
  );
}
export default Nav;
