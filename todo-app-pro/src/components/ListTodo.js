import React from "react";
import '../styles/Todo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{
    state ={
        ListTodo: [
            {id: 'todo1', title: 'Do something'}
        ]
    }
    addNewTodo = (todo)=>{
        this.setState({
            ListTodo: [...this.state.ListTodo, todo]
        })
        toast.success("Success!");
    }
    render(){
        return(
            <>
            <div className="container">
                <AddTodo 
                addNewTodo={this.addNewTodo}
                />
                <hr />
                <div className="listTodo">
                <table className="table table-hover table-primary">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>To do</th>
                        <th>E/D</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.ListTodo && this.state.ListTodo.length > 0 &&
                    this.state.ListTodo.map((item, index) =>{
                        return(
                            <tr key={item.id}>
                                <td>{index +1}</td>
                                <td>{item.title}</td>
                                <td>
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            )
                        })  
                    }         
                </tbody>
                </table>
                </div>
            </div>
            </>
        )
    }
}

export default ListTodo;