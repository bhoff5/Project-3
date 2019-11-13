import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 180,
        clear: "both",
        textAlign: "center",
        marginTop: 20,
        backgroundColor: "#fff0"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
