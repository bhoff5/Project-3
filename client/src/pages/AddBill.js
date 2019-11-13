import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import TenantList from "../components/TenantList";
import Calendar from "../components/Calendar";
import { formatDate } from "react-day-picker/moment";
import "moment/locale/it";

class AddBill extends Component {
  state = {
    household: "",
    title: "",
    description: "",
    amount: 0,
    creator: "",
    assignedToPay: [],
    modifiedAssignedToPay: [],
    successMsg: "",
    failMsg: "",
    dueDate: undefined,
    redirectTo: ""
  };

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.setState({ redirectTo: "/login" });
    } else {
      console.log(this.props);
      this.loadTenants(this.props.household);
    }
  }

  handleDayChange = day => {
    this.setState({ dueDate: formatDate(new Date(day)) });
  };

  toggleTenant = name => {
    let tempArr = this.state.modifiedAssignedToPay;
    let ind = tempArr.indexOf(name);
    if (ind !== -1) {
      console.log("true");
      tempArr.splice(ind, 1);
    } else {
      console.log("false");
      tempArr.push(name);
    }
    this.setState({
      modifiedAssignedToPay: tempArr
    });
    this.mapModifiedAssignedToPay();
  };

  loadTenants = name => {
    API.getHouseholdsbyName(name)
      .then(res => {
        console.log(res);
        this.setState({
          assignedToPay: res.data[0].tenants
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  mapModifiedAssignedToPay = () => {
    let y = this.state.modifiedAssignedToPay.map(item => ({
      name: item,
      paid: false
    }));
    return y;
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (true) {
      API.saveBill({
        household: this.props.household,
        title: this.state.title,
        description: this.state.description,
        amount: this.state.amount,
        dueDate: this.state.dueDate,
        creator: this.props.displayName,
        assignedToPay: this.mapModifiedAssignedToPay()
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({
              successMsg: "Bill creation successful!",
              failMsg: ""
            });
            setTimeout(() => this.setState({ redirectTo: "/" }), 1000);
          } else {
            this.setState({
              successMsg: "",
              failMsg: "Error"
            });
          }
        })
        .catch(err =>
          this.setState({
            successMsg: "",
            failMsg: "Error"
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
                <h1>Create Bill</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  data="Title (required)"
                />
                <Input
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  data="Description (required)"
                />
                <Input
                  value={this.state.amount}
                  onChange={this.handleInputChange}
                  name="amount"
                  data="Amount (required)"
                />
                <Calendar
                  value={this.state.dueDate}
                  onDayChange={this.handleDayChange}
                  name="dueDate"
                  data="Due Date (required)"
                />
                <br />

                <div>Select Tenants to Include: </div>
                <ul className="tenantListGroup" style={{ marginLeft: 30 }}>
                  {this.state.assignedToPay.map(tenant => (
                    <TenantList
                      key={tenant}
                      name={tenant}
                      toggleTenant={this.toggleTenant}
                    >
                      {tenant}
                    </TenantList>
                  ))}
                </ul>
                <FormBtn
                  disabled={!(this.state.title && this.state.amount)}
                  onClick={this.handleFormSubmit}
                  successmsg={this.state.successMsg}
                  failmsg={this.state.failMsg}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default AddBill;
