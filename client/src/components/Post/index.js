import React from "react";

export function Post(props) {
  console.log(props);
  return (
    <p>
      <h3>{props.title}</h3>
      <div className="subHeader">{props.description}</div>
      <div className="cardContent">
        <br />
        Bill posted by: {props.creator}
        <br />
        Total amount due: ${props.amount}
        <br />
        Your part: ${props.amount / 4}
        <br />
        Due date: {props.dueDate}
      </div>
    </p>
  );
}
export default Post;
