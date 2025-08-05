import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [username, setUsername] = useState("USER");

  useEffect(() => {
    axios.get("http://localhost:3000/check-auth", { withCredentials: true })
      .then((res) => {
        if (res.data.authenticated) {
          setUsername(res.data.user.username); // 🟢 username set karo
        }
      })
      .catch((err) => {
        console.error("Failed to fetch user", err);
      });
  }, []);

  const handleMenu = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenu(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenu(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenu(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenu(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenu(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenu(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">{username.slice(0, 2).toUpperCase()}</div>
          <div className="username">{username}</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
