import React from "react";
import { toast } from 'react-toastify';
import '../styles/Todo.scss';

class AddTodo extends React.Component{
    state = {
        title: ''
    }
    handleOnChangeTitle=(event)=>{
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo=()=>{
        if(!this.state.title){
            toast.warning("Did you forget to enter title ?")
            return;
        }
        let todo = {
            id: Math.floor(Math.random()*1000),
            title: this.state.title
        } 
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render(){
        let {title} = this.state;
        return(
            <div className="addTodo">
            <input type="text" className="todoInput" value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
            ></input>
            <>   </>
            <button className="btn btn-success"
            onClick={()=> this.handleAddTodo()}
            >Add</button>
            </div>
        )
    }
}

export default AddTodo;