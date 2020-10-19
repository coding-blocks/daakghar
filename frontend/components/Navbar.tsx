import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

//FIXME: Obtain user auth details from redux store.
const isAuthenticated = true;
const user = {
  firstname: "Tarun",
};

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  return (
    <div>
      <Router>
        <nav className="main-nav">
          <span className="logo-parent">
            <Link to="/">
              <img
                src="https://codingblocks.com/assets/images/cb/cblogo.png"
                alt="online-logo"
                className="nav-logo pointer"
              />
            </Link>
          </span>
          <ul className="nav-list">
            <li className="nav-items pointer">
              <Link to="/layouts">Layouts</Link>
            </li>
            {isAuthenticated && (
              <li className="nav-items pointer">
                Hi,<mark>{user.firstname}</mark>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-items pointer">
                <button
                  className="button-solid white"
                  onClick={() => console.log("Logout button clicked")}
                >
                  {/* FIXME: Add logout method */}
                  Logout
                </button>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-items pointer">
                <Link className="button-solid white" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </Router>
    </div>
  );
};

export default Navbar;
