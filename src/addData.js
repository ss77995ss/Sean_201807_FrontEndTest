import React from "react";

export class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    // alert("submit used");
    // this.props.onSubmit(newNo.target.value, newName, newPhone, newEmail);
    e.preventDefault();
    this.props.onSubmit(e);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          No.<input name="no" type="text" />
        </label>
        <label>
          Name<input name="name" type="text" />
        </label>
        <label>
          Phone<input name="phone" type="text" />
        </label>
        <label>
          Email<input name="email" type="text" required />
        </label>
        <input type="submit" value="Insert" />
      </form>
    );
  }
}
