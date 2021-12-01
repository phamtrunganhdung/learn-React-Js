import React from "react";

class ComponentForm extends React.Component {
    state  = {
        lastName: "",
        firstName: "",
        fullName: ""
    }
    onChangeName =(name,event)=>{
        if(name === 'firstName'){
            this.setState({
                firstName: event.target.value
            });
        }else{
            this.setState({
                lastName: event.target.value
            });
        }
    }
    showName =(event)=>{
        event.preventDefault();
        this.setState({
            fullName: this.state.lastName + " " + this.state.firstName
        });
    }
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" value={this.state.firstName} onChange={(event)=> this.onChangeName('firstName',event)} />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" value={this.state.lastName} onChange={(event)=> this.onChangeName('lastName',event)} />
          <br />
          <button type="submit" onClick={(event)=> this.showName(event)} >Submit</button>
          <br />
          <br />
          <span>Full name is {this.state.fullName}</span>
        </form>
      </>
    );
  }
}

export default ComponentForm;
