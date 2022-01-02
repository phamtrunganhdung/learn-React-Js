import React from "react";
import axios from "axios";
import "../styles/ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
    page: "https://reqres.in/api/users?page=1",
  };

  async componentDidMount() {
    let { page } = this.state;
    let res = await axios.get(page);
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <>
        <div className="listUserContainer">
          <h4 style={{ color: "#1fc2c2" }}>
            use Axios to get users through the API of Reqres
          </h4>
          <table className="table table-hover table-primary">
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>

                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    onClick={() => this.handleViewDetailUser(item)}
                  >
                    <td>{item.id}</td>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>
                      <img src={item.avatar} alt="new" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default withRouter(ListUser);
