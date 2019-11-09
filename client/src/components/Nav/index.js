import React, { Component } from "react";
import "./style.css";
import Logo from "./whiteapartlogo.png";
import { Link } from "react-router-dom";
import axios from "axios";


class Nav extends Component {

  // constructor(props) {
  //   super(props);
  //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
  // }

  // handleLogoutClick() {
  //   axios.post('/user/logout').then(response => {
  //     console.log(response.data)
  //     if (response.status === 200) {
  //       this.props.updateUser({
  //         loggedIn: false,
  //         username: null,
  //         displayName: null,
  //         email: null,
  //         household: null
  //       })
  //     }
  //   }
  // }

  render(props) {

    const loggedInVar = this.props.loggedIn;
    console.log(loggedInVar);
    let button;

    if (loggedInVar) {
      button = <button className="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">
        Log Out
    </button>
    }

    return (
      <div>
        <nav className="hideoriginalnav">
          <div className="nav-wrapper brandcolorbar">
            <a href="/" className="brand-logo right">
              <img src={Logo} alt="website logo" className="bottomlogo toplogo" />
            </a>
            <ul id="nav-mobile" className="left">
              <li>
                <Link to="/">

                  HOME{" "}

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

                  CREATE BILL{" "}
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

                  YOUR PROFILE{" "}
                </Link>
              </li>
              <li>
                <Link to="/login">


                  LOG IN{" "}

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
