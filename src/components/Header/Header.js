import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UseContext";
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <p>signed by : {user.name}</p>
        </div>
      </nav>
    );
};

export default Header;