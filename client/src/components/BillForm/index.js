import React, { Component } from "react";
import "./style.css";

// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
// });

// // Or with jQuery

// $(document).ready(function () {
//     $('.datepicker').datepicker();
// });


class BillForm extends Component {

    //methods to pull info from 

    state = {
    };

    getBillName() {

    }

    render() {
        return (
            <div className="container">
                <div className="col s12 m6">
                    <div className="card-panel">
                        <h2 className="card-title">Create a Bill</h2>
                        <div className="row">
                            <div className="input-field col">
                                <input id="bill_name" type="text" className="validate" />
                                <label for="bill_name">Bill name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col">
                                <input id="bill_total" type="text" className="validate" />
                                <label for="bill_total">Total amount</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col">
                                <input id="due_date" type="text" className="datepicker" />
                                {/* Ideally this section will eventually be a calendar picker. Need to get that working with React properly*/}
                                <label for="due_date">Due date</label>
                            </div>
                        </div>
                        {/* Idea for additional field: a drop down of the names of memebers of your household and you select who is paying. This will help set the number by which the total is divided to determine how much each person owes as well as the names on the right side of the bill post either checked paid or unpaid */}
                        <button className="btn waves-effect waves-light" type="submit" name="action" id="billSubmit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default BillForm;