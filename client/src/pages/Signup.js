import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn, CurrencyInput } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

class Signup extends Component {
  state = {
    username: "",
    displayName: "",
    password: "",
    msg: ""
  };

  componentDidMount() { }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password && this.state.displayName) {
      API.signup({
        username: this.state.username,
        displayName: this.state.displayName,
        password: this.state.password
      })
        .then(res => this.setState({ msg: res.data.msg }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Sign Up</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.emailAddress}
                onChange={this.handleInputChange}
                name="emailAddress"
                placeholder="Email address (required)"
              />
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
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={
                  !(
                    this.state.username &&
                    this.state.password &&
                    this.state.displayName
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
              {this.state.msg}
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
