import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("Login");

  const handleClick = () => {
    text === "Login" ? setText("Logout") : setText("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img height={60} src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button onClick={handleClick}> {text}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
