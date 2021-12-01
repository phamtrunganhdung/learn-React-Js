import React from "react";

class ChildComponent extends React.Component {
    state  = {
        
    }
  render() {
      let {lastName, firstName, fullName, age, arrJobs} = this.props;
    return (
      <>
        <div>
            FirstName: {firstName} - LastName: {lastName} - Age: {age} 
        </div>
        <div>
            {fullName}
        </div>
        <div className="jobsList">
            {
                arrJobs.map((item,index)=>{
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    )
                })
            }
        </div>
      </>
    );
  }
}



//function component
// const ChildComponent =(props)=>{
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
export default ChildComponent;
