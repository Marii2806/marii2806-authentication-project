import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = () => {
    actions.addUser(email, password);
  }

  return (
    <div>
      <h1>Sign Up Form</h1>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/login">
        <button className="btn-primary" onClick={handleAddUser}>
          Sign Up
        </button>
      </Link>
    </div>
  );
};
