import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../GraphQL/Mutations";
import { useNavigate } from "react-router-dom";
import VitalForm from "./VitalForm";
import DailyInfoForm from "./DailyInfoForm";

import "../Form.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState(""); // State to track user's role
  const navigate = useNavigate();

  // Retrieve user's role from Local Storage during component initialization
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  const [loginUser, { loading }] = useMutation(LOGIN_MUTATION, {
    onError: (error) => {
      setError(error.message);
    },
    onCompleted: (data) => {
      const { role } = data.loginUser;
      setRole(role); // Set user's role
      localStorage.setItem("userRole", role);
      localStorage.setItem("userEmail", email);
      if (role === "nurse") {
        navigate("/vitals");
      } else {
        navigate("/");
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: { email, password } });
      const { role } = data.loginUser;
      setRole(role);
      // Store the user's role and email in local storage
      localStorage.setItem("userRole", role);
      localStorage.setItem("userEmail", email);
    } catch (error) {
      setError(error.message);
    }
  };

  // Render the appropriate component based on user's role
  if (loading) {
    return <p>Loading...</p>;
  } else if (role === "nurse") {
    return <VitalForm />;
  } else if (role === "patient") {
    return <DailyInfoForm />;
  } else {
    return (
      <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
