import React, { Component } from "react";
import API from "../utils/API";
import Profile from "../components/Profile";

class Main extends Component {

    state = {
        emailAddress: this.state.emailAddress,
        username: this.state.username,
        displayName: this.state.displayName,
        householdID: this.state.householdID
    };

    componentDidMount() { }
    render() {
        return (
            <div>
                <Profile
                    emailAddress={this.state.emailAddress}
                    username={this.state.username}
                    displayName={this.state.displayName}
                />
                <br />
                <InviteUserCard
                    householdID={this.state.householdID}
                />
            </div>
        );
    }
}

export default Main;