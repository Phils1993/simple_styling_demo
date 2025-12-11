import React, { useState } from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.css";
import login from "../login/login.module.css";

const Header = ({ headers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setLoggedIn(false);
  };

  return (
    <div className={styles.header}>
      <nav>
        {headers.map((header, index) => (
          <NavLink
            key={index}
            to={header.url}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {header.title}
          </NavLink>
        ))}
      </nav>

      <div className={login.loginContainer}>
        {isLoggedIn ? (
          <div>
            <span styles={login.welcomeText}>
              velkommen {username} til demo CSS
            </span>
            <button onClick={handleLogout} className={login.logoutButton}>
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className={login.loginBox}>
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Submit button */}
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Header;
