import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ListName } from "../components/List";
import { Input, TextArea, FormBtn, CurrencyInput } from "../components/Form";

class Main extends Component {
  state = {
    bills: "",
    assignedToPay: "test1"
  };

  componentDidMount() {
    this.loadBills();
  }

  loadBills = () => {
    API.getBills()
      .then(res => {
        this.setState({
          bills: res.data,
          assignedToPay: "test"
        });
      })
      .catch(err => console.log(err));
    console.log(this.state.assignedToPay);
  };

  deleteBill = id => {
    API.deleteBill(id)
      .then(res => this.loadBills())
      .catch(err => console.log(err));
  };

  toggleItem(name, id) {
    let updatedItems = this.state.bills.map(item => ({
      ...item,
      assignedToPay: item.assignedToPay.map(item => ({
        ...item,
        paid: item.name === name ? !item.paid : item.paid
      }))
    }));
    this.setState({ bills: updatedItems });
    setTimeout(() => this.updateBill(id), 1000);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  updateBill = id => {
    let tempItem;
    console.log(JSON.stringify(this.state.assignedToPay));
    this.state.bills
      .filter(function(item) {
        if (item._id === id) {
          return item;
        }
      })
      .map(item => {
        tempItem = item.assignedToPay;
      });
    this.setState({ assignedToPay: tempItem });
    API.updateBill(id, {
      assignedToPay: this.state.assignedToPay
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
              <h1>Add Bill</h1>
            </Jumbotron>
            {/* <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Bill
              </FormBtn>
            </form> */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Active Bills</h1>
            </Jumbotron>
            {this.state.bills.length ? (
              <List>
                {this.state.bills.map(bill => (
                  <ListItem key={bill._id}>
                    {/* <Link to={"/bills/" + bill._id}>
                      <strong>{bill.title}</strong>
                    </Link> */}
                    <p>
                      Created by: {bill.creator}
                      <br></br>
                      Description: {bill.description}
                      <br></br>
                      Amount: ${bill.amount}
                      <br></br>
                      Due Date: {bill.dueDate}
                      <br></br>
                      Payers:{" "}
                    </p>
                    <List>
                      {bill.assignedToPay.map(payer => (
                        <ListName
                          key={payer.name}
                          paid={payer.paid}
                          id={payer.name}
                          onClick={() => {
                            this.toggleItem(payer.name, bill._id);
                          }}
                        >
                          {payer.name}
                        </ListName>
                      ))}
                    </List>

                    <DeleteBtn onClick={() => this.deleteBill(bill._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
