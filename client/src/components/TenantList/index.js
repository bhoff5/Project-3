import React, { Component } from "react";

class TenantList extends React.Component {
  state = { checked: false };

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked });
    // this.props.toggleTenant("test?");
    let x = this.props.name;
    this.props.toggleTenant(x);
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          // className="waves-effect btn-small"
          // onClick={this.props.onClick}
          onChange={this.handleCheckboxChange}
          checked={this.state.checked}
        />
        <span>{this.props.children}</span>
      </label>
    );
  }
}

export default TenantList;
