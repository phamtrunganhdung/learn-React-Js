import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class BasicComponent extends React.Component {
  state = {
    name: "ComponentHello",
    status: "Happy",
    write: "Write every thing",
  };
  showName = () => {
    alert("My name is " + this.state.name);
  };
  showStatus = () => {
    alert("I am so " + this.state.status);
  };
  changeContentInput = (event) => {
    this.setState({
      write: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="hello-world">
          <h4>Hello world</h4>
        </div>
        <div className="handling-event">
          <button className="btn btn-success" onClick={() => this.showName()}>Alert name</button>
          <button className="btn btn-primary" onClick={() => this.showStatus()}>Alert status</button>
          <hr />
          <input
            type="text"
            value={this.state.write}
            onChange={(event) => this.changeContentInput(event)}
          ></input>
          <hr />
          <p>Write: {this.state.write}</p>
        </div>
      </>
    );
  }
}
export default BasicComponent;
