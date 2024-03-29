import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("Login");

  const handleClick = () => {
    text === "Login" ? setText("Logout") : setText("Login");
  };

  return (
    <div className="flex justify-between bg-orange-500 shadow-sm">
      <div className="logo-container">
        <img src={LOGO_URL} className=" h-14" />
      </div>
      <div className="nav-items">
        <ul className="flex p-2 m-2 text-white">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button onClick={handleClick}> {text}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
