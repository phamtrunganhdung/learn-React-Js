import React from "react";

class ComponentBasic extends React.Component {
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
          <button onClick={() => this.showName()}>Alert name</button>
          <button onClick={() => this.showStatus()}>Alert status</button>
          <br />
          <input
            type="text"
            value={this.state.write}
            onChange={(event) => this.changeContentInput(event)}
          ></input>
          <p>Write: {this.state.write}</p>
        </div>
      </>
    );
  }
}
export default ComponentBasic;
