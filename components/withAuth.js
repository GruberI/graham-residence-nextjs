// components/withAuth.js

import { useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [inputPassword, setInputPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const password = process.env.NEXT_PUBLIC_PROTECTED_PAGE_PASSWORD;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputPassword === password) {
        setIsAuthenticated(true);
      } else {
        alert("Incorrect password!");
      }
    };

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1>Enter Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <button
            type="submit"
            style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
};

export default withAuth;
