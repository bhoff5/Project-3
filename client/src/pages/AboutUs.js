import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import FooterControl from "../components/FooterControl";
import brian from "../images/brian.jpg";
import colin from "../images/colin.jpeg";
import shannon from "../images/shannon.jpg";
import paul from "../images/paul.jpeg";
import "./AboutUs.css";

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <FooterControl>
                    <Jumbotron>
                        <h1>Meet the Team!</h1>
                    </Jumbotron>
                    <div className="row">
                        <div className="col m5 s10 offset-s1 offset-m1">
                            <img src={brian} className="team-photo" />
                            <a href="https://github.com/bhoff5"><h2 className="team-name">Brian Hoff</h2></a>
                            <h5 className="team-tagline">Problem-solver extraordinaire.</h5>
                            <ul className="team-list">
                                <li>React integration</li>
                                <li>Front-end Developer</li>
                            </ul>

                        </div>
                        <div className="col m5 s10 offset-s1">
                            <img src={shannon} className="team-photo" />
                            <a href="https://github.com/shannon-burke"><h2 className="team-name">Shannon Burke</h2></a>
                            <h5 className="team-tagline">Artsy by nature, techy by design.</h5>
                            <ul className="team-list">
                                <li>Graphic Designer</li>
                                <li>Front-end Developer</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m5 s10 offset-s1 offset-m1">
                            <img src={paul} className="team-photo" />
                            <a href="https://github.com/pdlampe"><h2 className="team-name">Paul Lampe</h2></a>
                            <h5 className="team-tagline">Certified master of the navbar.</h5>
                            <ul className="team-list">
                                <li>UX Designer</li>
                                <li>Front-end Developer</li>
                            </ul>
                        </div>
                        <div className="col m5 s10 offset-s1">
                            <img src={colin} className="team-photo" />
                            <a href="https://github.com/celving"><h2 className="team-name">Colin Elving</h2></a>
                            <h5 className="team-tagline">The man behind the curtain.</h5>
                            <ul className="team-list">
                                <li>Authentication</li>
                                <li>Back-end Developer</li>
                            </ul>
                        </div>
                    </div>
                </FooterControl>
            </Container>
        )
    }
}

export default Main;