import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Profile from "../components/Profile";
import InviteUserCard from "../components/InviteUserCard";

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
                <div>
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
            );
        };
    };
};

export default Main;