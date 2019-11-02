import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BillForm from "../components/BillForm";

class Main extends Component {
  state = {};
  render() {
    return (
      <BillForm />
    );
  }
}

export default Main;
