import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLogout } from "../../hooks/useLogout";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
export default function Navbar() {
  const { Logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Expense Tracker</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <p>Hello,{user.displayName}</p>
            </li>
            <li>
              <button className="btn" onClick={Logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
