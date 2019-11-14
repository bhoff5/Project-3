import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Logonav from "./components/logonav";
import Iconnav from "./components/iconnav";
import AddBill from "./pages/AddBill";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      email: null,
      displayName: null,
      household: null
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
        console.log(response.data.user.username);
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          email: response.data.user.email,
          displayName: response.data.user.displayName,
          household: response.data.user.household
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          email: null,
          displayName: null,
          household: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Logonav
            loggedIn={this.state.loggedIn}
          />

          <Iconnav
            loggedIn={this.state.loggedIn}
            updateUser={this.updateUser}
            username={this.state.username}
            displayName={this.state.displayName}
            email={this.state.email}
            household={this.state.household}
          />

          <Nav
            loggedIn={this.state.loggedIn}
            updateUser={this.updateUser}
            username={this.state.username}
            displayName={this.state.displayName}
            email={this.state.email}
            household={this.state.household}
          />



          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  household={this.state.household}
                  loggedIn={this.state.loggedIn}
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
                  household={this.state.household}
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
                  household={this.state.household}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={() => (
                <Signup
                  updateUser={this.updateUser}
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  household={this.state.household}
                />
              )}
            />
            <Route
              exact
              path="/profile"
              render={() => (
                <UserProfile
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  household={this.state.household}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <Route
              exact
              path="/about"
              render={() => (
                <AboutUs
                  username={this.state.username}
                  displayName={this.state.displayName}
                  email={this.state.email}
                  household={this.state.household}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
