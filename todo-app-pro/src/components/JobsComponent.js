import React from "react";
import "../styles/JobForm.scss";

class JobsComponent extends React.Component {
  state = {
    showJobs: false,
  };
  onHandleConditional = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        <div className="jobsList">
          {showJobs === false ? (
            <button
              className="btn btn-warning"
              onClick={() => this.onHandleConditional()}
            >
              Show Jobs
            </button>
          ) : (
            <>
              <div>
                <table className="table table-hover ">
                  <thead className="table-color">
                    <tr>
                      <th>Job name</th>
                      <th>Salary</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody className="table-color ">
                    {arrJobs.map((item, index) => {
                      return (
                        <tr key={item.id} className="font-weight-bold">
                          <td>{item.title}</td>
                          <td>{item.salary} $</td>
                          <td>
                            <button
                              className="btn btn-danger btn-delete"
                              onClick={() => this.handleDelete(item)}
                            >
                              x
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-warning"
                onClick={() => this.onHandleConditional()}
              >
                Hide Jobs
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}

//function component
// const JobsComponent =(props)=>{
//   return (
//           <>
//             <div>
//                 FirstName: {props.firstName} - LastName: {props.lastName} - Age: {props.age}
//             </div>
//             <div>
//                 {props.fullName}
//             </div>
//             <div className="jobsList">
//                 {
//                     props.arrJobs.map((item,index)=>{
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//           </>
//         );
// }
export default JobsComponent;
