import React, { Component } from "react";
import API from "../utils/API";
import Profile from "../components/Profile";
import InviteUserCard from "../components/InviteUserCard";

class Main extends Component {

    state = {
        email: this.props.email,
        username: this.props.username,
        displayName: this.props.displayName,
        household: this.props.household
    };

    componentDidMount() { }

    render() {
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
    }
}

export default Main;