import React from "react";

export function Post(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <br />
      {props.description}
      <br />
      Bill posted by: {props.creator}
      <br />
      Total amount due: ${props.amount}
      <br />
      Your part: ${props.amount / 4}
      <br />
      Due date: {props.dueDate}
    </div>
  );
}
export default Post;
