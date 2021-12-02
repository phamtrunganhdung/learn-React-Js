import React from "react";

class JobsFormComponent extends React.Component {
    state = {
        jobTitle: "",
        salary: ""
    }
    onChangeJobForm = (tit, event)=>{
        tit === "jobTitle" ?
        this.setState({
            jobTitle: event.target.value
        })
        :
        this.setState({
            salary: event.target.value
        });
    }
    onSubmitJob =(event)=>{
        event.preventDefault();
    }
    render() {
        let {jtt, slr} = this.state;
        return(
            <>
            <form>
          <label htmlFor="title">Job title</label>
          <br />
          <input type="text" value={jtt} onChange={(event)=>this.onChangeJobForm("jobTitle",event)} />
          <br />
          <label htmlFor="salary">Salary</label>
          <br />
          <input type="text" value={slr} onChange={(event)=>this.onChangeJobForm("salary",event)} />
          <br />
          <button type="submit" onClick={(event)=>this.onSubmitJob(event)} >Submit</button>
          <br />
        </form>
            </>
        )
    }
}

export default JobsFormComponent;