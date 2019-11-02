
import React from "react";
//import "./style.css";

export function Profile(props) {
    console.log(props);
    console.log(props.displayName);
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
                        <span>Your display name:</span>{props.displayName}<span id="userId"></span>
                        <br />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card" id="householdsList">
                    <div class="card-title">
                        Household Info
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




export default Profile;