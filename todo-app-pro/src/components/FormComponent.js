import React from "react";
import JobsComponent from "./JobsComponent";
import JobsFormComponent from "./JobsFormComponent";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class FormComponent extends React.Component {
  state = {
    jobs: [
      { id: "rbJob1", title: "Developer", salary: "500" },
      { id: "rbJob2", title: "Tester", salary: "350" },
      { id: "rbJob3", title: "Project Manager", salary: "900" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      jobs: [...this.state.jobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJobs = this.state.jobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      jobs: currentJobs,
    });
  };
  render() {
    let { jobs } = this.state;
    return (
      <>
        <div className="text-center">
          <JobsFormComponent
            addNewJob={this.addNewJob}
            deleteAJob={this.deleteAJob}
          />
          <br />
          <JobsComponent arrJobs={jobs} />
        </div>
      </>
    );
  }
}

export default FormComponent;
