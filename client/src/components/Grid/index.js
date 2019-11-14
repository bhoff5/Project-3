import React from "react";
import { PromiseProvider } from "mongoose";


export function Container({ fluid, children }) {
  return <div className={"container"}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className="row">{children}</div>;
}

export function Col({ size, children }) {
  return <div className="col l6 offset-l3 m8 offset-m2 s12">{children}</div>;
}

export function Card({ size, children }) {
  return <div className="col l10 offset-l1 m12 offset-m0 s12">{children}</div>;
}

export function CardCol({ size, children }) {
  return (
    // <div className="col l8 offset-l1 s10 offset-s2 m10 offset-m1">
    <div className="col l6 m6 s12 card-content">{children}</div>
  );
}

export function CardTenantCol({ size, children }) {
  return (
    // <div className="col l8 offset-l1 s10 offset-s2 m10 offset-m1">
    <div className="col l6 m6 s12 card-content">{children}</div>
  );
}
