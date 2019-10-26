import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, CurrencyInput } from "../components/Form";

class Login extends Component {
  state = {};

  componentDidMount() {
    this.loadBills();
  }

  loadBills = () => {
    API.getBills()
      .then(res => {
        this.setState({ bills: res.data, title: "", author: "", synopsis: "" });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  deleteBill = id => {
    API.deleteBill(id)
      .then(res => this.loadBills())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBill({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBills())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Log In</h1>
            </Jumbotron>
            <form>
              <Input
                value=""
                onChange={this.handleInputChange}
                name="Username"
                placeholder="Username (required)"
              />
              <Input
                value=""
                onChange={this.handleInputChange}
                name="Password"
                placeholder="Password (required)"
              />

              <FormBtn disabled="" onClick={this.handleFormSubmit}>
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
