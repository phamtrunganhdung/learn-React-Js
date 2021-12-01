import React from "react";
import ChildComponent from "./ChildComponent";

class ComponentForm extends React.Component {
    state  = {
        lastName: "",
        firstName: "",
        age: "",
        fullName: "",
        jobs: [
          {id: 'rbJob1', title:'Developer', salary:'500 $'},
          {id: 'rbJob2', title:'Tester', salary:'350 $'},
          {id: 'rbJob3', title:'Project Manager', salary:'900 $'}
        ]
    }
    onChangeName =(name,event)=>{
        if(name === 'firstName'){
            this.setState({
                firstName: event.target.value
            });
        }else if(name === 'lastName'){
            this.setState({
                lastName: event.target.value
            });
        }else {
          this.setState({
            age: event.target.value
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
    let {lastName, firstName, age, fullName, jobs} = this.state;
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
          <label htmlFor="fname">Age:</label>
          <br />
          <input type="text" value={this.state.age} onChange={(event)=> this.onChangeName('age',event)} />
          <br />
          <button type="submit" onClick={(event)=> this.showName(event)} >Submit</button>
          <br />
        </form>
        <div className="child-component">
        <ChildComponent
        lastName={lastName} 
        firstName={firstName} 
        fullName={fullName} 
        age={age}
        arrJobs={jobs}
        />
        </div>
      </>
    );
  }
}

export default ComponentForm;
