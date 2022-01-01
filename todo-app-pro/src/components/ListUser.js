import React from "react";
import axios from "axios";
import "../styles/ListUser.scss";

class ListUser extends React.Component {
  state = {
    listUser: [],
    page: "https://reqres.in/api/users?page=",
  };

  async componentDidMount() {
    let { page } = this.state;
    let res = await axios.get(page);
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
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
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
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

export default ListUser;
