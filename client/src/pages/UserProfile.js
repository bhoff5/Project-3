import React, { Component } from "react";
import API from "../utils/API";
import Profile from "../components/Profile";

class Main extends Component {

    state = {
        email: this.state.email,
        username: this.state.username,
        displayName: this.state.displayName,
        household: this.state.household
    };

    componentDidMount() { }
    render() {
        return (
            <div>
                <Profile
                    email={this.state.email}
                    username={this.state.username}
                    displayName={this.state.displayName}
                />
                <br />
                <InviteUserCard
                    household={this.state.household}
                />
            </div>
        );
    }
}

export default Main;