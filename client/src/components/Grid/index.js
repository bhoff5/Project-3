import React from "react";
import { PromiseProvider } from "mongoose";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={"container"}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className="row">{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return <div className="col l8 offset-l2 m12 offset-m0 s12">{children}</div>;
}

export function CardCol({ size, children }) {
  return (
    // <div className="col l8 offset-l1 s10 offset-s2 m10 offset-m1">
    <div className="col l6 card-content">{children}</div>
  );
}

export function CardTenantCol({ size, children }) {
  return (
    // <div className="col l8 offset-l1 s10 offset-s2 m10 offset-m1">
    <div className="col l6 card-content">{children}</div>
  );
}
