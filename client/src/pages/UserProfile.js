import React, { Component } from "react";
import API from "../utils/API";
import Profile from "../components/Profile";

class Main extends Component {
    componentDidMount() { }
    render() {
        return (
            <Profile
                displayName={this.state.displayName}
            />
        );
    }
}

export default Main;