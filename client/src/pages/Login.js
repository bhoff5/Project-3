import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, CurrencyInput } from "../components/Form";

class Login extends Component {
  state = {
    username: "",
    password: "",
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
            this.props.updateUser({
              loggedIn: true,
              username: response.data.username
            });
            this.setState({
              redirectTo: "/"
            });
          }
        })
        .catch(err => console.log(err));
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
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                />

                <FormBtn disabled="" onClick={this.handleFormSubmit}>
                  Submit
                </FormBtn>
                <p>
                  Not a member? <a href="/signup">Sign up now!</a>
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
