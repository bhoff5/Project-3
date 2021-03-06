import axios from "axios";

export default {
  getBills: function () {
    return axios.get("/api/bills");
  },
  getBill: function (id) {
    return axios.get("/api/bills/" + id);
  },
  deleteBill: function (id) {
    return axios.delete("/api/bills/" + id);
  },
  saveBill: function (billData) {
    return axios.post("/api/bills", billData);
  },
  updateBill: function (id, billData) {
    return axios.put("api/bills/" + id, billData);
  },
  login: function (userData) {
    return axios.post("/api/users/login", userData);
  },
  signup: function (userData) {
    return axios.post("/api/users/signup", userData);
  },
  dropUserFromHousehold: function (username) {
    return axios.put("/api/users/dropHousehold/" + username);
  },
  createNewHousehold: function (userData) {
    return axios.post("/api/households/", userData);
  },
  addUserToHousehold: function (household, userData) {
    return axios.put("/api/households/addUser/" + household, userData);
  },
  removeUserFromHousehold: function (household, userData) {
    return axios.put("/api/households/removeUser/" + household, userData);
  },
  getAllHouseholds: function () {
    return axios.get("/api/households/");
  },
  getHouseholdsbyName: function (name) {
    return axios.get("/api/households/" + name);
  },
  logout: function () {
    return axios.post("/api/users/logout")
  }
};
