import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import {
  Card,
  CardTenantCol,
  CardCol,
  Col,
  Row,
  Container
} from "../components/Grid";
import { List, ListItem, ListName } from "../components/List";
import { BillTitle, Post } from "../components/Post";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import FooterControl from "../components/FooterControl";
import SplashScreen from "../components/SplashScreen";

class Main extends Component {
  state = {
    bills: "",
    assignedToPay: ""
  };

  cInd = 0;
  uInd = 0;

  resetVariables = () => {
    this.cInd = 0;
    this.uInd = 0;
  };

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.setState({ redirectTo: "/login" });
    } else {
      this.loadBills(this.props.household);
    }
  }

  componentDidUpdate() {
    this.cInd = 0;
    this.uInd = 0;
  }

  loadBills = household => {
    console.log(household);
    API.getBill(household)
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
      .then(res => {
        let updatedItems = this.state.bills.map(item => ({
          ...item
        }));

        this.setState({ bills: updatedItems });
      })
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

  confirmDelete = id => {
    confirmAlert({
      message: `Are you sure you want to delete this bill?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log("test");
            this.deleteBill(id);
          }
        },
        {
          label: "No",
          onClick: () => {
            return;
          }
        }
      ]
    });
  };

  deleteBill = id => {
    API.deleteBill(id).then(this.loadBills(this.props.household));
  };

  toggleItem(name, id) {
    confirmAlert({
      message: `Are you sure you want to change ${name}'s payment status?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
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
        },
        {
          label: "No",
          onClick: () => {
            return;
          }
        }
      ]
    });
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

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Container fluid>
          <div>
            <SplashScreen delay={3000}>hello</SplashScreen>
          </div>
          <FooterControl>
            <Row>
              <Card>
                <Jumbotron>
                  <h1>Active Bills</h1>
                </Jumbotron>

                {this.state.bills.length ? (
                  <List>
                    {this.state.bills.map(bill => (
                      <ListItem key={bill._id}>
                        <div>{this.resetVariables()}</div>
                        <DeleteBtn
                          onClick={() => this.confirmDelete(bill._id)}
                        />
                        {/* <Row> */}
                        {/* </Row> */}
                        <Row>
                          <BillTitle title={bill.title} />
                          <CardCol size="md-6">
                            <Post
                              title={bill.title}
                              description={bill.description}
                              amount={bill.amount}
                              creator={bill.creator}
                              dueDate={bill.dueDate}
                              tenantLength={bill.assignedToPay.length}
                            ></Post>
                          </CardCol>
                          <CardTenantCol>
                            <div className="tenantList">
                              <List>
                                {bill.assignedToPay.map(payer => (
                                  <ListName
                                    key={payer.name}
                                    paid={payer.paid}
                                    height={this.getHeight(bill._id)}
                                    index={
                                      payer.paid ? this.cInd++ : this.uInd++
                                    }
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
                                  style={{
                                    height: `${this.getHeight(bill._id)}px`
                                  }}
                                ></div>
                                <div id="itemCountSpacer">
                                  {this.uInd === 0
                                    ? `Everyone has paid!`
                                    : this.cInd === 0
                                    ? `No one has paid`
                                    : this.cInd === 1
                                    ? `${this.cInd} person has paid`
                                    : `${this.cInd} people have paid`}
                                </div>
                                <div
                                  id="items-completed-spacer"
                                  style={{
                                    height: `${this.getCompletedHeight(
                                      bill._id
                                    )}px`
                                  }}
                                ></div>
                              </List>
                            </div>
                          </CardTenantCol>
                        </Row>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <p>No Results to Display</p>
                )}
              </Card>
            </Row>
          </FooterControl>
        </Container>
      );
    }
  }
}

export default Main;
