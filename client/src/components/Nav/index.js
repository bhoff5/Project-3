import React, { Component } from "react";
import "./style.css";
import Logo from "./apartgandw.png";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper green accent-4">
            <a href="/" className="brand-logo right">
              <img src={Logo} alt="website logo" />
            </a>
            <ul id="nav-mobile" className="left">
              <li>
                <Link to="/">
                  <button className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">
                    Home
                  </button>{" "}
                </Link>
                {/* <a
                  href="/"
                  className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn"
                >
                  Home
                </a> */}
              </li>
              <li>
                <Link to="/signup">
                  <button className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">
                    Sign Up
                  </button>{" "}
                </Link>
                {/* <a
                  href="/signup"
                  className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn"
                >
                  Invite
                </a> */}
              </li>
              <li>
                <Link to="/newbill">
                  <button className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">
                    Create Bill
                  </button>{" "}
                </Link>

                {/* <a

                  href="/newbill"

                  className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn"
                >
                  New Bill
                </a> */}
              </li>
              <li>
                <Link to="/login">
                  <button className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">
                    Log In
                  </button>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
