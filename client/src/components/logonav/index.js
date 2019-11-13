import React, { Component } from "react";
import "./style.css";
import Logo from "./whiteapartlogo.png";

class Logonav extends Component {
    render() {
        return (
            <div>
                <nav class="hide-on-med-and-up nvpad">
                    <div class="nav-wrapper brandcolorbar">
                        <a href="/" className="brand-logo center">
                            <img src={Logo} alt="website logo" className="mobilelogo" />
                        </a>
                        <ul id="nav-mobile" class="left ">
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Logonav;
