import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Signup from "../pages/signup";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  function handleLogout() {
    actions.logout();
  }

  return (
    <div className="text-center mt-5">
      <div>
        {!store.token ? (
          <>
            <Link to="/login">
              <button className="btn-success">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn-primary">Sign Up</button>
            </Link>
          </>
        ) : (
          <button className="btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
