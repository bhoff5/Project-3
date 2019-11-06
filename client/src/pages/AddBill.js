import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BillForm from "../components/BillForm";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, CurrencyInput } from "../components/Form";
import { runInThisContext } from "vm";

class AddBill extends Component {
  state = {
    household: [],
    title: "",
    description: "",
    amount: 0,
    dueDate: "",
    creator: "",
    assignedToPay: ""
  };

  componentDidMount() { }

  // loadTenants = () => {
  //   API.getBills()
  //     .then(res => {
  //       this.setState({
  //         bills: res.data,
  //         assignedToPay: "test"
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (true) {
      API.saveBill({
        household: this.props.households,
        title: this.state.title,
        description: this.state.description,
        amount: this.state.amount,
        dueDate: this.state.dueDate,
        creator: this.props.displayName,
        assignedToPay: [
          { name: "Brian", paid: false },
          { name: "Shannon", paid: false },
          { name: "Paul", paid: false }
        ]
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create Bill</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Amount (required)"
              />
              <Input
                value={this.state.dueDate}
                onChange={this.handleInputChange}
                name="dueDate"
                placeholder="Due Date (required)"
              />
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              {/* <Input
                value={this.state.assignedToPay}
                onChange={this.handleInputChange}
                name="assignedToPay"
                placeholder="Assigned To Pay (required)"
              /> */}
              <FormBtn
                disabled={!(this.state.title && this.state.amount)}
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

export default AddBill;
