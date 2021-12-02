import React from "react";
import JobsComponent from "./JobsComponent";
import JobsFormComponent from "./JobsFormComponent";

class FormComponent extends React.Component {
    state  = {
        lastName: "",
        firstName: "",
        age: "",
        fullName: "",
        jobs: [
          {id: 'rbJob1', title:'Developer', salary:'500'},
          {id: 'rbJob2', title:'Tester', salary:'350'},
          {id: 'rbJob3', title:'Project Manager', salary:'900'}
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
    addNewJob =(job)=>{
        this.setState({
          jobs: [...this.state.jobs, job]
        })
    }
    deleteAJob =(job)=>{
      let currentJobs = this.state.jobs;
      currentJobs = currentJobs.filter(item => item.id !== job.id)
      this.setState({
        jobs: currentJobs
      })
    }
  render() {
    let {lastName, firstName, age, fullName, jobs} = this.state;
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" value={firstName} onChange={(event)=> this.onChangeName('firstName',event)} />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" value={lastName} onChange={(event)=> this.onChangeName('lastName',event)} />
          <br />
          <label htmlFor="fname">Age:</label>
          <br />
          <input type="text" value={age} onChange={(event)=> this.onChangeName('age',event)} />
          <br />
          <button type="submit" onClick={(event)=> this.showName(event)} >Submit</button>
          <br />
        </form>
        <div>
            FirstName: {firstName} - LastName: {lastName} - Age: {age} 
        </div>
        <div>
            {fullName}
        </div>
        <div className="child-component">
          <JobsFormComponent 
          addNewJob={this.addNewJob}   
          deleteAJob={this.deleteAJob}       
          />
        <JobsComponent
        arrJobs={jobs}
        />
        </div>
      </>
    );
  }
}

export default FormComponent;
