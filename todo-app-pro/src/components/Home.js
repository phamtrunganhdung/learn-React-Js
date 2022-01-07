import React from "react";
import "../styles/Home.scss";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {
  handleDeleteNickName = (nickname) => {
    this.props.deleteNicknameRedux(nickname);
  };
  handleAddNewNickName = () => {
    this.props.addNewNickName();
  };
  render() {
    let listLinks = this.props.links;
    let listNickNames = this.props.nickName;
    return (
      <>
        <h4 style={{ color: "#1fc2c2" }}>My many links</h4>
        <div>
          {listLinks &&
            listLinks.length > 0 &&
            listLinks.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - <a href={item.link}>{item.title}</a>
                </div>
              );
            })}
        </div>
        <h4 style={{ color: "#1fc2c2" }}>My nick name</h4>
        <div>
          {listNickNames &&
            listNickNames.length > 0 &&
            listNickNames.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} -{" "}
                  <span onClick={() => this.handleDeleteNickName(item)}>x</span>
                </div>
              );
            })}
          <button
            className="btn btn-success"
            onClick={() => this.handleAddNewNickName()}
          >
            Add random nickname
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.manyLinks,
    nickName: state.nickName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNicknameRedux: (nicknameDelete) =>
      dispatch({
        type: "DELETE_NICKNAME",
        payload: nicknameDelete,
      }),
    addNewNickName: () =>
      dispatch({
        type: "ADD_NICKNAME",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
