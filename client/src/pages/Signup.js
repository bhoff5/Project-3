import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Input, TextArea, PasswordInput, FormBtn, CurrencyInput } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import FooterControl from "../components/FooterControl";

class Signup extends Component {
  state = {
    username: "",
    displayName: "",
    password: "",
    email: "",
    household: "",
    successMsg: "",
    failMsg: ""
  };

  componentDidMount() { }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  responseMethod = response => {
    if (response.status === 200) {
      console.log("Sign-in successful");
      this.setState({
        successMsg: "Sign Up Successful",
        failMsg: ""
      });
      setTimeout(() => this.setState({ redirectTo: "/login" }), 1000);
    } else {
      this.setState({
        successMsg: "",
        failMsg: "System Error. Please try again later."
      });
    }
  };

  handleFormSubmit = event => {
    let householdKey = this.state.household;
    event.preventDefault();
    if (
      this.state.username &&
      this.state.password &&
      this.state.displayName &&
      this.state.email
    ) {
      if (householdKey === "") {
        API.createNewHousehold({
          username: this.state.username
        })
          .then(
            API.signup({
              username: this.state.username,
              displayName: this.state.displayName,
              password: this.state.password,
              email: this.state.email,
              household: this.state.username
            })
          )
          .then(
            API.addUserToHousehold(this.state.username, {
              username: this.state.username
            })
          )
          .then(response => this.responseMethod(response))
          .catch(err =>
            this.setState({
              successMsg: "",
              failMsg: "Username or password is incorrect"
            })
          );
      } else if (householdKey !== "") {
        API.signup({
          username: this.state.username,
          displayName: this.state.displayName,
          password: this.state.password,
          email: this.state.email,
          household: this.state.household
        })
          .then(
            API.addUserToHousehold(householdKey, {
              username: this.state.username
            })
          )
          .then(response => this.responseMethod(response))
          .catch(err =>
            this.setState({
              successMsg: "",
              failMsg: "Username or password is incorrect"
            })
          );
      }
    } else {
      this.setState({ failMsg: "Please fill out all fields" });
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Container fluid>
          <FooterControl>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Sign Up</h1>
                </Jumbotron>
                <form>
                  <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Username (required)"
                  />
                  <Input
                    value={this.state.displayName}
                    onChange={this.handleInputChange}
                    name="displayName"
                    placeholder="Display Name (required)"
                  />
                  <PasswordInput
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                  />
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email (required)"
                  />
                  <p>
                    If you are joining an existing household, enter code here.
                    Otherwise leave blank.
                </p>
                  <Input
                    value={this.state.household}
                    onChange={this.handleInputChange}
                    name="household"
                    placeholder="Household Code"
                  />
                  <FormBtn
                    disabled={
                      !(
                        this.state.username &&
                        this.state.password &&
                        this.state.displayName &&
                        this.state.email
                      )
                    }
                    onClick={this.handleFormSubmit}
                    successMsg={this.state.successMsg}
                    failMsg={this.state.failMsg}
                  >
                    Submit
                </FormBtn>
                  {this.state.msg}
                </form>
              </Col>
            </Row>
          </FooterControl>
        </Container>
      );
    }
  }
}

export default Signup;
