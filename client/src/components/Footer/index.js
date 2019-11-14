import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Team from "./team.png";

class Footer extends Component {

    render() {
        return (
            <div>
                <div className="footer hide-on-small-only valign-wrapper">
                    <Link to="/about"><img src={Team} /></Link>
                </div>
            </div>
        )
    }
}

export default Footer;