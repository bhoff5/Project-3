import React, { Component } from "react";
import API from "../../utils/API";
//import "./style.css";

class Profile extends Component {


    state = {
        username: "",
        displayName: "",
        password: "",
        msg: ""
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password && this.state.displayName) {
            API.signup({
                username: this.state.username,
                displayName: this.state.displayName,
                password: this.state.password
            })
                .then(res => this.setState({ msg: res.data.msg }))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                {/* should display username, associated email, associated households and household validation code. additional bonus of "invite a new user" button. Also bonus: "create a new household" */}

                <div class="row">
                    <div class="card" id="basic info">
                        <div class="card-title">
                            Your info
                        </div>
                        <div class="card-content">
                            <span>Your email address:</span><span id="userEmail"></span>
                            <br />
                            <span>Your display name:</span><span id="userId">{this.state.displayName}</span>
                            <br />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="card" id="householdsList">
                        <div class="card-title">
                            Your info
                        </div>
                        <div class="card-content">
                            <span>Household ID:</span><span class="householdId"></span>
                            <br />
                        </div>
                        <div class="card-action">
                            <button id="invite-user">Invite</button>
                        </div>
                        <div class="card-action">
                            <button id="create-new">Create new household</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};



export default Profile;