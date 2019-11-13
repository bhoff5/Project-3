import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import {
  Input,
  PasswordInput,
  TextArea,
  FormBtn,
  CurrencyInput
} from "../components/Form";

class Login extends Component {
  state = {
    username: "",
    password: "",
    successMsg: "",
    failMsg: "",
    redirectTo: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      })
        .then(response => {
          console.log(response.data);
          if (response.status === 200) {
            console.log("Sign-in successful");
            this.setState({
              successMsg: "Log In Successful",
              failMsg: ""
            });
            this.props.updateUser({
              loggedIn: true,
              username: response.data.username,
              email: response.data.email,
              displayName: response.data.displayName,
              household: response.data.household
            });
            setTimeout(() => this.setState({ redirectTo: "/" }), 1000);
          } else {
            this.setState({
              successMsg: "",
              failMsg: "System Error. Please try again later."
            });
          }
        })
        .catch(err =>
          this.setState({
            successMsg: "",
            failMsg: "Username or password is incorrect"
          })
        );
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Log In</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username (required)"
                />
                <PasswordInput
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                />

                <FormBtn
                  successmsg={this.state.successMsg}
                  failmsg={this.state.failMsg}
                  disabled=""
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
                <p>
                  Not a member?
                  <Link to="/signup"> Sign up now!</Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Login;
