import React from "react";

export class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.handleDel = this.handleDel.bind(this);
    this.handleMod = this.handleMod.bind(this);
  }
  handleDel(e) {
    // alert(e.target.id);
    this.props.delClick(e);
  }
  handleMod(e) {
    // alert(e.target.id);
    this.props.modClick(e);
  }
  render() {
    return (
      <tr>
        <td>{this.props.data.no}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.phone}</td>
        <td>{this.props.data.email}</td>
        <td>
          <input
            type="button"
            id={this.props.data.name}
            value="Delete"
            onClick={this.handleDel}
          />
          ,{" "}
          <input
            type="button"
            id={this.props.data.name}
            value="Modify"
            onClick={this.handleMod}
          />
        </td>
      </tr>
    );
  }
}
