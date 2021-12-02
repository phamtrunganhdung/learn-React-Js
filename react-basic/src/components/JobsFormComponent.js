import React from "react";

class JobsFormComponent extends React.Component {
    state = {
        title: "",
        salary: ""
    }
    onChangeJobForm = (tit, event)=>{
        tit === "title" ?
        this.setState({
            title: event.target.value
        })
        :
        this.setState({
            salary: event.target.value
        });
    }
    onSubmitJob =(event)=>{
        event.preventDefault();
        if(!this.state.title || !this.state.salary){
            alert("Missing data");
            return;
        }
        this.props.addNewJob({
            id: 'rbJob'+Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: "",
            salary: ""
        })
    }
    render() {
        return(
            <>
            <form>
                <hr />
                <label htmlFor="title">Job title</label>
                <br />
                <input type="text" value={this.state.title} onChange={(event)=>this.onChangeJobForm("title",event)} />
                <br />
                <label htmlFor="salary">Salary</label>
                <br />
                <input type="text" value={this.state.salary} onChange={(event)=>this.onChangeJobForm("salary",event)} />
                <br />
                <button className="btn btn-success" type="submit" onClick={(event)=>this.onSubmitJob(event)} >Add Job</button>
                <br />
            </form>
            </>
        )
    }
}

export default JobsFormComponent;