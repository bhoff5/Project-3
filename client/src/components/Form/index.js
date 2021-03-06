import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="input-field form-group ">
      <input className="form-control" id={props.name} type="text" {...props} />
      <label htmlFor={props.name}>{props.data}</label>
    </div>
  );
}

export function PasswordInput(props) {
  return (
    <div className="form-group">
      <input type="password" {...props} />
    </div>
  );
}

export function CurrencyInput(props) {
  return (
    // <div className="form-group">
    //   <input className="form-control"  />
    // </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">$</span>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
        {...props}
      />
      <div className="input-group-append">
        <span className="input-group-text">.00</span>
      </div>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="buttonContainer">
      <button
        {...props}
        style={{ float: "right", marginBottom: 50 }}
        className="btn drkgreen "
      >
        {props.children}
      </button>
      <div className="msg successMsg">{props.successmsg}</div>
      <div className="msg failMsg">{props.failmsg}</div>
    </div>
  );
}
