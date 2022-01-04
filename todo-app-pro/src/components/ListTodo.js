import React from "react";
import "../styles/Todo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodo: [{ id: "todo1", title: "Do something" }],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      ListTodo: [...this.state.ListTodo, todo],
    });
    toast.success("Add succeed!");
  };
  deleteTodo = (todo) => {
    let currentTodo = this.state.ListTodo;
    this.setState({
      ListTodo: currentTodo.filter((item) => item.id !== todo.id),
    });
    toast.success("Delete succeed!");
  };
  updateTodo = (todo) => {
    let { editTodo, ListTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...ListTodo];

      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      listTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        ListTodo: listTodoCopy,
        editTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  handleChecked = () => {};
  render() {
    let { ListTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <div className="container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <hr />
          <div className="listTodo">
            <table className="table table-hover table-primary">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>To do</th>
                  <th>Done ?</th>
                  <th>U/D</th>
                </tr>
              </thead>
              <tbody>
                {ListTodo &&
                  ListTodo.length > 0 &&
                  ListTodo.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        {isEmptyObj === true ? (
                          <td>{item.title}</td>
                        ) : (
                          <>
                            {editTodo.id === item.id ? (
                              <td>
                                <input
                                  type="text"
                                  onChange={(event) =>
                                    this.handleOnchangeEditTodo(event)
                                  }
                                  value={editTodo.title}
                                ></input>
                              </td>
                            ) : (
                              <td>{item.title}</td>
                            )}
                          </>
                        )}
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkDone"
                            onChange={() => this.handleChecked()}
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => this.updateTodo(item)}
                          >
                            Update
                          </button>
                          <> </>
                          <button
                            className="btn btn-danger"
                            onClick={() => this.deleteTodo(item)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
