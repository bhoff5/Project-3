
import React from "react";
//import "./style.css";

export function InviteUserCard(props) {
    console.log(props);
    //console.log(props.displayName);
    return (
        <div>
            {/* should display household ID with button to invite a user to the household */}

            <div className="row">
                <div className="card" id="household-info">
                    <div className="card-title">
                        {props.household}
                    </div>
                    <div className="card-content">
                        <div className="input-field">
                            <input id="invite-email" type="text" className="validate" />
                            <label for="invite-email">Enter recipient email</label>
                        </div>
                        <button id="invite-button">Send invite</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}




export default InviteUserCard;