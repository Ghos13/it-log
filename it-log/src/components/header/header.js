import React from "react";
import { Link } from "react-router-dom";
import "../../style/style.css";
import logo from "../../images/logo.png";
class Header extends React.Component {
  render() {
    return (
      <header className="header-component">
        <div className="container">
          <div className="header-navbar">
            <div className="logo">
              <Link to="/main">
                <img className="img" src={logo} alt="" />
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li className="ul_li">
                  <Link className="link-about" to="/about">
                    about
                  </Link>
                </li>
                <li className="ul_li">
                  <Link className="link-profile" to="/profile">
                    profile
                  </Link>
                </li>
                <Link className="link-login" to="/login">
                  Log in
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
