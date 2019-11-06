import React, { Component } from "react";
import "./style.css";
import Logo from "./apartgandw.png";

class Logonav extends Component {
    render() {
        return (

            <nav class="brandbar">
                <div class="nav-wrapper green accent-4">
                    <a href="/" className="brand-logo center">
                        <img src={Logo} alt="website logo" class="mobilelogo" />
                    </a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
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
