import React from "react";

class JobsComponent extends React.Component {
    state  = {
        showJobs: false
    }
  onHandleConditional = ()=>{
    this.setState({
      showJobs: !this.state.showJobs
    });
  }
  handleDelete= (job)=>{
    this.props.deleteAJob(job);
  }
  render() {
      let {arrJobs} = this.props;
      let {showJobs} = this.state;
    return (
      <>
        <div className="jobsList">
            {showJobs === false ?
                      <button onClick={()=>this.onHandleConditional()}>Show Jobs</button>         
                      :
                      <>
                        <div>
                        {arrJobs.map((item,index)=>{
                        return (
                        <div key={item.id}>
                            {item.title} - {item.salary} $ <button onClick={()=>this.handleDelete(item)} >x</button>
                        </div>
                          )
                        })}
                        </div>  
                        <button onClick={()=>this.onHandleConditional()} >Hide Jobs</button>    
                      </>
            }
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
