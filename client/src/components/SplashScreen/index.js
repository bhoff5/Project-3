import React, { Component } from "react";
import "./style.css";
import aGraphic from "./a.png";
import part from "./PART.png";

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentWillReceiveProps(nextProps) {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.setTimer();
      this.setState({ visible: true });
    }
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    // clear any existing timer
    if (this._timer != null) {
      clearTimeout(this._timer);
    }

    // hide after `delay` milliseconds
    this._timer = setTimeout(
      function() {
        this.setState({ visible: false });
        this._timer = null;
      }.bind(this),
      this.props.delay
    );
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return this.state.visible ? (
      <div className="splashScreen">
        <div className="svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg">
            <polygon
              points=" 70,70 70,30 35,5 5,30 5,70"
              class="shape"
              stroke-linecap="square"
              stroke-width="1"
            />
          </svg>
          <img id="aGraphic" src={aGraphic} />
          <div className="textContainer">
            <img className="text" src={part} />
          </div>
        </div>
      </div>
    ) : (
      <span />
    );
  }
}

export default SplashScreen;
