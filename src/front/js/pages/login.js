import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    actions.login(email, password);
    console.log(store.token);
  };

  const handleLogout = () => {
    actions.logout();
  };

  if (store.token && store.token !== "" && store.token !== undefined) {
    navigate("/private");
  }

  return (
    <div>
      {store.token && store.token !== "" && store.token !== undefined ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
