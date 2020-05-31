import React, { Component } from 'react'
import '../Styles/Home.css'
import logo from '../../logo.svg'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-sec1">
          <div className="home-logo">
            {/* <img src={logo} alt="Logo Img" /> */}
          </div>

          <div className="home-rhs">
            <h1> Hi, </h1>
            <h1> I'm Fatiu, A Fullstack & Microsoft Community Developer</h1>
            {/* <p>Passionate about creative problem solving and creating meaningful user experiences.
            Interested in education, human-to-computer communication, sustainability, and accessibility.
            </p> */}
          </div>
        </div>
      </div>
    )
  }
}
