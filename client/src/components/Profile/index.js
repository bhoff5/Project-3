
import React from "react";
import "./style.css";

export function Profile(props) {
    console.log(props);
    console.log(props.displayName);
    return (
        <div>
            {/* should display username, display name, andassociated email */}

            <div className="row">
                <div className="card" id="basic-info">
                    <div className="card-content center-align">
                        <h3>Your info</h3>
                    </div>
                    <div className="card-content">
                        <span className="info-tags">Email </span>{props.email}
                        <br />
                        <span className="info-tags">Username </span>{props.username}
                        <br />
                        <span className="info-tags">Display name </span>{props.displayName}
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}




export default Profile;