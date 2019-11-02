import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ListName } from "../components/List";
import Post from "../components/Post";
import Profile from "../components/Profile";

class Main extends Component {
  state = {
    bills: "",
    assignedToPay: "test1"
  };

  cInd = 0;
  uInd = 0;

  resetVariables = () => {
    this.cInd = 0;
    this.uInd = 0;
  };

  componentDidMount() {
    this.loadBills();
  }

  componentDidUpdate() {
    this.cInd = 0;
    this.uInd = 0;
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
      .filter(function (item) {
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
    // let cInd = 0;
    // let uInd = 0;
    // let resetVariables = function() {
    //   cInd = 0;
    //   uInd = 0;
    // };
    // let payerLength;
    // let payerLengthFunc = function() {
    //   payerLength = this.state.bill.assignedToPay.length;
    // };
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Active Bills</h1>
            </Jumbotron>

            <Profile
              displayName={}
            />

            {this.state.bills.length ? (
              <List>
                {this.state.bills.map(bill => (
                  <ListItem key={bill._id}>
                    <div>{this.resetVariables()}</div>

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
                        <List>
                          {/* {payerLengthFunc()} */}
                          {bill.assignedToPay.map(payer => (
                            <ListName
                              key={payer.name}
                              paid={payer.paid}
                              // eachAmount={bill.amount / payerLength}
                              height={this.getHeight(bill._id)}
                              index={payer.paid ? this.cInd++ : this.uInd++}
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
                            {this.uInd === 0
                              ? `Everyone has paid!`
<<<<<<< HEAD
                              : cInd === 0
                                ? `No one has paid`
                                : cInd === 1
                                  ? `${cInd} person has paid`
                                  : `${cInd} people have paid`}
=======
                              : this.cInd === 0
                              ? `No one has paid`
                              : this.cInd === 1
                              ? `${this.cInd} person has paid`
                              : `${this.cInd} people have paid`}
>>>>>>> 6ff9019874a220438cb5ec86f81b50964b256774
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
                <p>No Results to Display</p>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
