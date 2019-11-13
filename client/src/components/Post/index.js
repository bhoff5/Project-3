import React from "react";
import "./style.css";

export function Post(props) {
  console.log(props);
  return (
    <div>
      <span style={{ fontSize: 40 }}>${props.amount}&nbsp;</span>
      <span style={{ fontSize: 12 }}>total</span>
      <blockquote>{props.description}</blockquote>
      Posted by {props.creator}
      <br />
      Each tenant owes ${props.amount / props.tenantLength}
      <br />
      Due on {props.dueDate}
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
