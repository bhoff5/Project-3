import React, { Component } from "react";

export function Post(props) {
  return (
    <p>
      Bill posted by: {props.creator}
      <br />
      Total amount due: ${props.amount}
      <br />
      Your part: ${props.amount / 4}
      <br />
      Due date: {props.dueDate}
    </p>
  );
}
export default Post;
