import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import Profile from "../components/Profile";
import InviteUserCard from "../components/InviteUserCard";
import Jumbotron from "../components/Jumbotron";

class Main extends Component {

    state = {

        email: this.props.email,
        username: this.props.username,
        displayName: this.props.displayName,
        household: this.props.household

    };

    componentDidMount() {
        if (!this.props.loggedIn) {
            this.setState({ redirectTo: "/login" })
        }
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />;
        } else {
            return (
                <div className="row">
                    <Jumbotron>
                        <h1>Your Profile</h1>
                    </Jumbotron>
                    <div className="col m4 offset-m4 s10 offset-s1">
                        <Profile
                            email={this.props.email}
                            username={this.props.username}
                            displayName={this.props.displayName}
                        />
                        <br />
                        <InviteUserCard
                            household={this.props.household}
                        />
                    </div>
                </div>
            );
        };
    };
};

export default Main;