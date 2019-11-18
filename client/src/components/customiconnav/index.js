import React, { Component } from "react";
import "./style.css";
import Logo from "./whiteapartlogo.png";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import hmeicon from './homeicon.png';
import addbillicon from './addicon.png';
import myprofile from './profileicon.png';
import lgout from './logouticon.png';

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

      <div className="hide-on-med-and-up bottomnav">


        <Link to="/">
          <img src={hmeicon} alt="Home Icon" />{" "}
        </Link>

        <Link to="/newbill">
          <img src={addbillicon} alt="Add Bill" />{" "}
        </Link>

        <Link to="/profile">
          <img src={myprofile} alt="My Profile" />{" "}
        </Link>

        <Link to="/login">
          <img src={lgout} alt="Login or Out" />{" "}
        </Link>


      </div>

    );
  }
}

export default Iconnav;
