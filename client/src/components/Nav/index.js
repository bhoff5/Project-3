import React, { Component } from "react";
import "./style.css";
import Logo from "./apartgandw.png";

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
                <a href="sass.html" class="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">Home</a>
              </li>
              <li>
                <a href="badges.html" class="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">Invite</a>
              </li>
              <li>
                <a href="collapsible.html" class="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">New Bill</a>
              </li>
              <li>
                <a href="collapsible.html" class="green-text text-darken-2 green lighten-5 waves-effect waves-light btn">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>


    );
  }
}


export default Nav