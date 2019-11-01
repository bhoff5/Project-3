import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ListName } from "../components/List";
import { Input, TextArea, FormBtn, CurrencyInput } from "../components/Form";
import Post from "../components/Post";

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
  };

  deleteBill = id => {
    API.deleteBill(id)
      .then(res => this.loadBills())
      .catch(err => console.log(err));
  };

  updateBill = id => {
    let tempItem;
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

  getHeight(id) {
    let unpaidItems = this.state.bills
      .filter(item => item._id === id)[0]
      .assignedToPay.filter(item => !item.paid).length;
    return unpaidItems * 43;
  }

  getCompletedHeight(id) {
    let unpaidItems = this.state.bills
      .filter(item => item._id === id)[0]
      .assignedToPay.filter(item => item.paid).length;
    return unpaidItems * 43;
  }

  toggleItem(name, id) {
    let updatedItems = this.state.bills.map(item => ({
      ...item,
      assignedToPay:
        item._id === id
          ? item.assignedToPay.map(item => ({
              ...item,
              paid: item.name === name ? !item.paid : item.paid
            }))
          : item.assignedToPay
    }));

    this.setState({ bills: updatedItems });
    setTimeout(() => this.updateBill(id), 1000);
  }

  // toggleItem(name, id) {
  //   let updatedItems = this.state.bills.map(item => ({
  //     ...item,
  //     assignedToPay:
  //       item._id === id
  //         ? item.assignedToPay
  //             .filter(payerItem => payerItem.name === name)
  //             .filter(payerItem => payerItem.paid === false).length !== 0
  //           ? [
  //               ...item.assignedToPay.filter(
  //                 payerItem => payerItem.name !== name
  //               ),
  //               ...item.assignedToPay
  //                 .filter(payerItem => payerItem.name === name)
  //                 .map(payerItem => ({
  //                   ...payerItem,
  //                   paid:
  //                     payerItem.name === name ? !payerItem.paid : payerItem.paid
  //                 }))
  //             ]
  //           : [
  //               ...item.assignedToPay
  //                 .filter(payerItem => payerItem.name === name)
  //                 .map(payerItem => ({
  //                   ...payerItem,
  //                   paid:
  //                     payerItem.name === name ? !payerItem.paid : payerItem.paid
  //                 })),
  //               ...item.assignedToPay.filter(function(payerItem) {
  //                 console.log("paid test");
  //                 return payerItem.name !== name;
  //               })
  //             ]
  //         : item.assignedToPay
  //   }));
  //   console.log(updatedItems);

  //   this.setState({ bills: updatedItems });
  //   // this.reorderItems(name, id);
  //   setTimeout(() => this.updateBill(id), 1000);
  // }

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
    let cInd = 0;
    let uInd = 0;
    let resetVariables = function() {
      cInd = 0;
      uInd = 0;
    };
    // let payerLength;
    // let payerLengthFunc = function() {
    //   payerLength = this.state.bill.assignedToPay.length;
    // };
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-6">
            <Jumbotron>
              <h1>Add Bill</h1>
            </Jumbotron>
            <form>
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
            </form>
          </Col> */}

          <Col size="md-12">
            <Jumbotron>
              <h1>Active Bills</h1>
            </Jumbotron>

            {this.state.bills.length ? (
              <List>
                {this.state.bills.map(bill => (
                  <ListItem key={bill._id}>
                    <div>{resetVariables()}</div>

                    <Row>
                      <Col size="md-6">
                        <Post
                          title={bill.title}
                          description={bill.description}
                          amount={bill.amount}
                          creator={bill.creator}
                          dueDate={bill.dueDate}
                        ></Post>
                      </Col>
                      <Col size="md-6">
                        Payers:{" "}
                        <List>
                          {/* {payerLengthFunc()} */}
                          {bill.assignedToPay.map(payer => (
                            <ListName
                              key={payer.name}
                              paid={payer.paid}
                              // eachAmount={bill.amount / payerLength}
                              height={this.getHeight(bill._id)}
                              index={payer.paid ? cInd++ : uInd++}
                              id={payer.name}
                              onClick={() => {
                                this.toggleItem(payer.name, bill._id);
                              }}
                            >
                              {payer.name}
                            </ListName>
                          ))}

                          <div
                            id="items-uncompleted-spacer"
                            style={{ height: `${this.getHeight(bill._id)}px` }}
                          ></div>
                          <div id="itemCountSpacer">
                            {uInd === 0
                              ? `Everyone has paid!`
                              : cInd === 0
                              ? `No one has paid`
                              : cInd === 1
                              ? `${cInd} person has paid`
                              : `${cInd} people have paid`}
                          </div>
                          <div
                            id="items-completed-spacer"
                            style={{
                              height: `${this.getCompletedHeight(bill._id)}px`
                            }}
                          ></div>
                        </List>
                      </Col>
                    </Row>
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
