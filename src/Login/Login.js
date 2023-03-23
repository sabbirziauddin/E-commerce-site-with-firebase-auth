import React, { useState, useSyncExternalStore } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UseContext";
import "./Login.css";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("login page : ", user);
        setError("");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  return (
    <div className="form-container ">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        <p>
          New to here ? <Link to="/signup"> Create New account</Link>
        </p>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
