
import React from "react";
//import "./style.css";

export function Profile(props) {
    console.log(props);
    console.log(props.displayName);
    return (
        <div>
            {/* should display username, display name, andassociated email */}

            <div class="row">
                <div class="card" id="basic-info">
                    <div class="card-title">
                        Your info
                        </div>
                    <div class="card-content">
                        <span>Your email address:{props.email}</span>
                        <br />
                        <span>Your username name:{props.username}</span>
                        <br />
                        <span>Your display name:{props.displayName}</span>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}




export default Profile;