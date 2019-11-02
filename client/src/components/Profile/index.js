import React, { Component } from "react";
import "./style.css";

class ProfileInfo extends Component {
    render() {
        return (
            <Container fluid>
                {/* should display username, associated email, associated households and household validation code. additional bonus of "invite a new user" button. Also bonus: "create a new household" */}

                <div class="row">
                    <div class="card" id="basic info">
                        <div class="card-title">
                            Your info
                        </div>
                        <div class="card-content">
                            <span>Your email address:</span><span id="userEmail"></span>
                            <br />
                            <span>Your display name:</span><span id="userId"></span>
                            <br />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
};

class ProfileHouseholds extends Component {
    render() {
        return (
            <Container fluid>
                {/* should display username, associated email, associated households and household validation code. additional bonus of "invite a new user" button. Also bonus: "create a new household" */}

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
            </Container>
        );
    }
};



export default ProfileInfo;
export default ProfileHouseholds;