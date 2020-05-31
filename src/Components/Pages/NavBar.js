/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'


export default class NavBar extends Component {
  componentDidMount() {
    // const mainNavLeft = document.getElementById("nav-left");
    const mainNavRight = document.getElementById("nav-right");
    const navBarToggle = document.getElementById("toggle");
    const navbar = document.getElementsByClassName("navbar")[0];

    navBarToggle.addEventListener("click", function () {
      // mainNavLeft.classList.toggle("active");
      mainNavRight.classList.toggle("active");
      navbar.classList.toggle("active2")
    });
  }
  render() {
    return (
      <div className="navbar">
        

        <ul className="navbar-lists">
          <a href="#" className="toggle" id="toggle"><i className="fa fa-reorder"></i></a>
          <div className="nav-left" id="nav-left">
            <Link className="item" to="/"><li><img src={logo} alt="Logo Img" /></li></Link>
          </div>
          <div className="nav-right" id="nav-right">
            <Link className="item" to="/contact" ><li>Contact</li></Link>
            <Link className="item" to="/about" ><li>About</li></Link>
          </div>
        </ul>
      </div>
    )
  }
}
