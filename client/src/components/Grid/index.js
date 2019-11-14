import React from "react";


export function Container({ fluid, children }) {
  return <div className={"container"}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className="row">{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
