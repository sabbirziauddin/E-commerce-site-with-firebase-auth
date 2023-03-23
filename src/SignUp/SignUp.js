import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-container ">
      <h2 className="form-title">Sign up</h2>
      <form>
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
        <p>
          Already have an account ? <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
