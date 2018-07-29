import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { TableData } from "./tableData.js";
import { AddData } from "./addData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          no: "1",
          name: "User1",
          phone: "02-1234567",
          email: "aaa@mail.com"
        },
        {
          no: "2",
          name: "User2",
          phone: "02-1234568",
          email: "bbb@mail.com"
        },
        {
          no: "3",
          name: "User3",
          phone: "02-1234569",
          email: "ccc@mail.com"
        },
        {
          no: "4",
          name: "User4",
          phone: "02-1234560",
          email: "ddd@mail.com"
        }
      ]
    };
    this.insert = this.insert.bind(this);
    this.delete = this.delete.bind(this);
    this.modify = this.modify.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  insert(e) {
    const newData = {
      no: e.target.no.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value
    };
    var myArray = this.state.data;
    var isKey = myArray.map(x => x.name).indexOf(newData.name);
    if (isKey < 0) {
      myArray.push(newData);
      this.setState({ data: myArray });
    } else {
      alert("Name不能重複");
    }
  }
  delete(e) {
    var myArray = this.state.data;
    var index = myArray.map(x => x.name).indexOf(e.target.id);
    myArray.splice(index, 1);
    this.setState({ data: myArray });
  }
  modify(e) {
    document.getElementById("modForm").style.display = "block";
    document.getElementById("modForm").text = e.target.id;
  }
  submit(e) {
    e.preventDefault();
    const i = document.getElementById("modForm").text;
    const newData = {
      no: e.target.no.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value
    };
    var myArray = this.state.data;
    var index = myArray.map(x => x.no).indexOf(i);
    var isKey = myArray.map(x => x.name).indexOf(newData.name);
    if (isKey < 0) {
      myArray[index] = newData;
      this.setState({ data: myArray });
      document.getElementById("modForm").style.display = "none";
    } else {
      alert("Name不能重複");
    }
  }
  cancel(e) {
    document.getElementById("modForm").style.display = "none";
  }

  render() {
    const headers = ["No.", "Name", "Phone", "Email", "Action"];
    const tableTitle = headers.map(headers => <th>{headers}</th>);

    return (
      <div className="App">
        <h1>Table</h1>
        <table>
          <tr>{tableTitle}</tr>
          {this.state.data.map((item, i) => (
            <TableData
              key={i}
              data={item}
              delClick={this.delete}
              modClick={this.modify}
            />
          ))}
        </table>
        <AddData onSubmit={this.insert} />
        <form
          action=""
          method="get"
          id="modForm"
          style={{ display: "none" }}
          onSubmit={this.submit}
        >
          <h3>Modify</h3>
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
          <input type="submit" value="save" />
          <input type="button" value="cancel" onClick={this.cancel} />
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
