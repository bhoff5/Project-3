import React, { Component } from "react";
import "./style.css";
import Logo from "./whiteapartlogo.png";

class Logonav extends Component {

    render() {
        return (

            <nav className="brandbar">
                <div className="nav-wrapper brandcolorbar">
                    <a href="/" className="brand-logo center">
                        <img src={Logo} alt="website logo" className="mobilelogo" />
                    </a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">&nbsp;</a></li>
                        <li><a href="badges.html">&nbsp;</a></li>
                        <li><a href="collapsible.html">&nbsp;</a></li>
                    </ul>

                </div>
            </nav>
        );
    }

}

export default Logonav;
