import React, { Component } from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";
import whatsapp from "../images/whatsapp.svg";

export default class NavBar extends Component {
  // set active state for hamburger
  state = { active: false };

  handleClick = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };
  render() {
    return (
      <div id="header">
        <Navbar
          style={{ background: "white" }}
          fixed="top"
          active={this.state.active}
        >
          <Navbar.Brand>
            <Navbar.Item renderAs="div">
              <Link to="/">RUSSIAN LANGUAGE COURSE</Link>
            </Navbar.Item>
            <Navbar.Burger
              active={this.state.active}
              onClick={this.handleClick}
            />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item renderAs="div">
                <Link to="/credits">Credits</Link>
              </Navbar.Item>
              <Navbar.Item renderAs="div"> 
                <Link to="/me">О нас</Link>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <Link to="/blogs">Блог</Link>
              </Navbar.Item>
            </Navbar.Container>
            <Navbar.Container position="end">
              <Navbar.Item renderAs="div">
                <span>
                  <img src={whatsapp} alt="whatsapp icon" />
                </span>
                <span>+7-777-348-6518</span>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}
