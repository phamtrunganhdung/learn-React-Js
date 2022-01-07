import React from "react";
import "../styles/Home.scss";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    console.log("check data: ", this.props.data);
    let listLinks = this.props.data;
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.manyLinks,
  };
};

export default connect(mapStateToProps)(withRouter(Home));
