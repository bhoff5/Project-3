import React, { Component } from "react";
import "./style.css";
import Logo from "./whiteapartlogo.png";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Iconnav extends Component {

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  };

  handleLogoutClick() {
    API.logout().then(response => {
      console.log(response.data)
      if (response.status === 200) {
        setTimeout(() =>
          this.props.updateUser({
            loggedIn: false,
            username: null,
            displayName: null,
            email: null,
            household: null
          }), 1000
        );
      }
    });
  };

  render() {
    return (
      <div className="brand-logo center">
        <nav className="hide-on-med-and-up iconnavbottom">
          <div className="nav-wrapper brandcolorbar">
            <a href="/" className="brand-logo right">
              <img src={Logo} alt="website logo" className="bottomlogo toplogo" />
            </a>
            <ul id="nav-mobile" className="left">
              <li>
                <Link to="/">
                  <i className=" material-icons" >home</i>{" "}
                </Link>
                {/* <a
                  href="/"
                  className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn"
                >
                  Home
                </a> */}
              </li>
              {/* <li>
                <Link to="/signup">
                  <button className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">
                    Sign Up
                  </button>{" "}
                </Link>
                { <a
                  href="/signup"
                  className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn"
                >
                  Invite
                </a> }
              </li > */}
              <li>
                <Link to="/newbill">
                  <i className="material-icons">monetization_on</i>{" "}
                </Link>

                {/* <a

                  href="/newbill"

                  className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn"
                >
                  New Bill
                </a> */}
              </li>
              <li>
                <Link to="/profile">
                  <i className="material-icons">person</i>{" "}
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="material-icons">lock_outline</i>{" "}
                </Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Iconnav;
