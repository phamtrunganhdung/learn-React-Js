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

export default ChildComponent;
