import React from "react";
import "./style.css";

export function Post(props) {
  console.log(props);
  return (
    <div>
      <blockquote>{props.description}</blockquote>
      Posted by {props.creator}
      <br />
      <br />
      Total amount due: ${props.amount}
      <br />
      <br />
      Your part: ${props.amount / props.tenantLength}
      <br />
      <br />
      Due date: {props.dueDate}
    </div>
  );
}

export function BillTitle(props) {
  return (
    <div className="card-content" style={{ paddingBottom: 0 }}>
      <div className="card-title">{props.title}</div>
    </div>
  );
}
