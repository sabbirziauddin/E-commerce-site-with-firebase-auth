import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UseContext";
import "./SignUp.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.passwordConfirm.value;
    if (password.length < 6) {
      setError("Password must be six character");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password is not match");
      return;
    } else {
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          form.reset();
          setError("");
          console.log(user);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    console.log("clicked", email, password, confirmPassword);
  };
  return (
    <div className="form-container ">
      <h2 className="form-title">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-control">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input type="password" name="passwordConfirm" />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        {error && <p className="error-text">{error}</p>}
        <p>
          Already have an account ? <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
