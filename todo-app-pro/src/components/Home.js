import React from "react";
import "../styles/Home.scss";
import { withRouter } from "react-router";

class Home extends React.Component {
  render() {
    return (
      <>
        <a href="https://www.github.com/phamtrunganhdung/learn-React-Js">
          Go to my github
        </a>
      </>
    );
  }
}

export default withRouter(Home);
