import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../styles/ListUser.scss";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBack = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <h4 style={{ color: "#1fc2c2" }}>Details user{user.id}</h4>
        <table className="table table-hover">
          <thead className="table-color">
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody className="table-color">
            <tr key={user.id}>
              {isEmptyObj === false && (
                <>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <img src={user.avatar} alt="new" />
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
        <button className="btn btn-danger" onClick={() => this.handleBack()}>
          Back
        </button>
      </>
    );
  }
}

export default withRouter(DetailUser);
