import React from "react";
import "../styles/Nav.scss";
import { NavLink } from "react-router-dom";
import nav_background from "../assets/images/nav_background.jpg";

class Nav extends React.Component {
  render() {
    return (
      <div
        className="topnav"
        style={{
          backgroundImage: `url(${nav_background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavLink to="/" activeClassName="active" className="home" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todo-App
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          Users
        </NavLink>
        <NavLink to="/form" activeClassName="active">
          Jobs-Form
        </NavLink>
      </div>
    );
  }
}

export default Nav;
