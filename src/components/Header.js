import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const myFunction = () => {
    btnName === "login" ? setBtnName("logout") : setBtnName("login");
  };

  // console.log(useState('a'))

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
              status { (onlineStatus) ? '🟢' : '🔴' }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li className="filterBtn">
            <button onClick={myFunction}>{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
