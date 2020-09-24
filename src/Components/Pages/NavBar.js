import React, { Component } from 'react';
import '../Styles/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  componentDidMount() {
    const cancelBtnDiv = document.querySelector(".navBtn-cancel")
    const cancelBtn = document.querySelector(".cancel-btn")
    const getBtn = document.querySelector(".res-btn")
    const getBtnDiv = document.querySelector(".navBtn")
    const getLogo = document.querySelector(".navLogo")
    const getContents = document.querySelector(".navbarUl")
    const getContainer = document.querySelector(".navbar-container")

    getContainer.style.height = "90px"
    getContainer.style.animation = "1s ease-out 0s 2 slideUp;"

    getBtn.addEventListener("click", () => {
      getBtnDiv.style.display = "none";
      cancelBtnDiv.style.display = "flex"
      if (window.matchMedia("(max-width: 768px)").matches) {
        getContainer.style.height = "350px";
        getLogo.style.display = "flex";
        getContents.style.display = "flex";
        getContainer.style.transition = "1s ease-out 0s 2 slideUp;"
      }
    });

    cancelBtn.addEventListener("click", () => {
      getBtnDiv.style.display = "flex"
      cancelBtnDiv.style.display = "none"
      if (window.matchMedia("(max-width: 768px)").matches) {
        getContainer.style.height = "100px";
        getLogo.style.display = "none";
        getContents.style.display = "none";
      }
    })
  }

  render() {
    return (
      <div className="navbar-container">

        <div className="navBtn">
          <button className="res-btn" id="res-btn">
            <FontAwesomeIcon
              className="icon"
              size="3x"
              icon={faList}
              color="#FCFCFC"

            />
          </button>
        </div>

        <div className="navBtn-cancel">
          <button className="cancel-btn" id="cancel-btn">
            <FontAwesomeIcon
              className="icon"
              size="3x"
              icon={faTimes}
              color="#FCFCFC"

            />
          </button>
        </div>

        <div className="navLogo"><Link className="logo" to="/">FT</Link></div>

        <ul className="navbarUl">
          <li><a href="/#about">About</a></li>
          <li> <a href="/#projects">Project</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><Link to="/blog">BLOG</Link></li>
        </ul>

      </div>
    )
  }
}
