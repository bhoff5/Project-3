import React from "react";

export function Post(props) {
  console.log(props);
  return (
    <div>
      <div className="row">
        <h3>{props.title}</h3>
      </div>
      {props.description}
      <br />
      Bill posted by: {props.creator}
      <br />
      Total amount due: ${props.amount}
      <br />
      Your part: ${props.amount / props.tenantLength}
      <br />
      Due date: {props.dueDate}
    </div>
  );
}
export default Post;
