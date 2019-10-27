import React, { Component } from "react"

class Post extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12 m10 l8 offset-m1 offset-l2">
                        <div class="card center-align">
                            <div class="card-title grey">
                                <h2>November Rent</h2>
                                <p>posted by Paul</p>
                            </div>
                            <div class="row valign-wrapper">
                                <div class="col s8">
                                    <div class="card-content">
                                        <h6>Your part is</h6>
                                        <h1>$250</h1>
                                        <h5>out of $1000</h5>
                                    </div>
                                </div>
                                <div class="col s4">
                                    <div class="card-content">
                                        <ul class="left-align">
                                            <li>✖ Colin</li>
                                            <li>✖ Brian</li>
                                            <li>✓ Shannon</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Post