import React from "react";
import "./style.css";
import "./checkbox.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    // <div className="list-overflow-container">
    <ul className="list-group">{children}</ul>
    // </div>
  );
}

export function ListItem(props) {
  return (
    <li className="billContainer card" onClick={props.onClick}>
      {props.children}
    </li>
  );
}

export function ListName(props) {
  function getTop() {
    const { index, height, paid } = props;
    // let position = index * 60;
    let prevHeight = paid
      ? index * 43
      : // _.sumBy(meta.completed.items.slice(0, index), "height")
        index * 43;
    // _.sumBy(meta.uncompleted.items.slice(0, index), "height"),
    let top = paid ? height + prevHeight + 43 : prevHeight;
    return top;
  }
  let topVal = getTop();
  return (
    <li
      className={
        props.paid
          ? "list-group-item listName completed"
          : "list-group-item listName item"
      }
      onClick={props.onClick}
      style={{ top: `${topVal}px` }}
    >
      <label className="toggleButton">
        <input
          type="checkbox"
          disabled="disabled"
          checked={props.paid ? "checked" : ""}
        />
        <div>
          <svg viewBox="0 0 44 44">
            <path
              d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
              transform="translate(-2.000000, -2.000000)"
            ></path>
          </svg>
        </div>
      </label>
      <div className="itemNameTextContent">
        {/* <div>{props.children}</div> */}
        <div id="textbox">
          <p className="alignleft">{props.children}</p>
          {/* <p className="alignright">{`$${props.eachAmount}`}</p> */}
        </div>
      </div>
    </li>
  );
}
