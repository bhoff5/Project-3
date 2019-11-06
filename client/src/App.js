import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Logonav from "./components/logonav";
import AddBill from "./pages/AddBill";
import Signup from "./pages/Signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      email: null,
      displayName: null,
      households: null
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/users/").then(response => {
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        console.log(response.data.user);
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          email: response.data.user.email,
          displayName: response.data.user.displayName,
          households: response.data.user.households
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          email: null,
          displayName: null,
          households: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Logonav />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  households={this.state.households}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  updateUser={this.updateUser}
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  households={this.state.households}
                />
              )}
            />
            <Route
              exact
              path="/newbill"
              render={() => (
                <AddBill
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  households={this.state.households}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={() => (
                <Signup
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  households={this.state.households}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
