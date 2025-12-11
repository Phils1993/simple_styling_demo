/* // Import React hooks for state management
import { useState, useEffect } from "react";

// Import CSS module for scoped styling
import styles from "../login/login.module.css";

// Functional component for the Login form
function LogIn({ login }) {
  // Initial state object for login credentials
  const init = { username: "", password: "" };

  // State to hold current values of username and password
  const [loginCredentials, setLoginCredentials] = useState(init);

  // Function to handle form submission
  const performLogin = (evt) => {
    evt.preventDefault(); // Prevent default form submission (page reload)
    // Call the login function passed in as a prop with current credentials
    login(loginCredentials.username, loginCredentials.password);
  };

  // Function to update state when input fields change
  const onChange = (evt) => {
    // Spread existing state and update the field that changed
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      {/* Heading styled with CSS module class */}
      <h2 className={styles.loginBox}>Login</h2>

      {/* Login form */}
      <form onSubmit={performLogin}>
        {/* Username input field */}
        <input
          placeholder="User Name"
          id="username"
          onChange={onChange}
          value={loginCredentials.username}
        />

        {/* Password input field */}
        <input
          placeholder="Password"
          id="password"
          onChange={onChange}
          value={loginCredentials.password}
        />

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Export the component so it can be used in other parts of the app
export default LogIn;
 */