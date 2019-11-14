import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
//import { brian } from "../images/brian";

class Main extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Meet the Team!</h1>
                </Jumbotron>
                <div className="row">
                    <div className="col m8 offset-m2">
                        {/* <img src={brian} className="team-photo" /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;