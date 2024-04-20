import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import "../Form.css";
function Form({ submitted, setSubmitted }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  // const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  const navigate = useNavigate();
  const addUser = async () => {
    try {
      await createUser({
        variables: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          role: role,
          password: password,
        },
      });
      // Store the user's role in Local Storage
      localStorage.setItem("userRole", role);
      setFirstName("");
      setLastName("");
      setEmail("");
      setRole("");
      setPassword("");
      setSubmitted(true); // Set submitted state to true after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  if (submitted) {
    // Render the LoginForm component after successful submission
    // return <LoginForm />;
    navigate("/login");
  }

  return (
    <div>
      <label>First Name: </label>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <label>Last Name: </label>
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <label>Email: </label>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label>Role: </label>
      <input
        type="text"
        placeholder="Role"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />
      <br />
      <label>Password </label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;
