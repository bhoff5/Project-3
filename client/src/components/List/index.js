import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
    <li className="list-group-item" onClick={props.onClick}>
      {props.children}
    </li>
  );
}

export function ListName(props) {
  return (
    <li
      className={
        props.paid ? "list-group-item completed" : "list-group-item item"
      }
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
}
