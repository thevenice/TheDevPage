import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import {
  NavTop,
  NavMain,
  Nav1,
  Nav2,
  NavHide,
  NavHideOn,
  DarkLord
} from "./NavbarStyled";
import { Consumer } from "../../context";

const Navbar = props => {
  return (
    <Consumer>
      {value => {
        const navhidefun = (x, y) => {
          return (
            <div>
              <Link to={x} onClick={_ => value.onNavToggle()}>
                {y}
              </Link>
            </div>
          );
        };
        return (
          <NavTop>
            <GlobalStyle />
            <NavMain className="navbar">
              {/* FIRST NAV CHILD  */}
              <Nav1>
                <Link className="nav1" to="/">
                  {props.brand}
                </Link>
              </Nav1>

              {/* SECOND NAV CHILD  */}
              <Nav2 className="nav2">
                <button className="nav2A" onClick={_ => value.onNavToggle()}>
                  =
                </button>
              </Nav2>
            </NavMain>
            <NavHideOn>
              <NavHide
                className={value.state.navToggle ? "notHidden" : "hidden"}
              >
                {navhidefun("/", "Home")}
                {navhidefun("/people", "People")}
                {/* {navhidefun("/form", "Form")} */}
                {navhidefun("/signup", "Signup")}
                {navhidefun("/dashboard", "Account")}
                <div>
                  {" "}
                  <DarkLord onClick={_ => value.onDark()}>
                    {!value.state.highlight ? "Light" : "Dark"}
                  </DarkLord>
                </div>
              </NavHide>
            </NavHideOn>
          </NavTop>
        );
      }}
    </Consumer>
  );
};

Navbar.deafultProps = {
  brand: "TITLE HERE"
};

Navbar.propTypes = {
  brand: PropTypes.string.isRequired
};
export default Navbar;
