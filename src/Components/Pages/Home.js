import React from 'react'
import '../Styles/Home.scss'
import ft from '../../img/ft.jpg'


export default function Home() {
  return (
    <div className="home-container" id="home">

      <div className="section1">
        <div className="sub-sec1">
          <h1> Hi, I'm Fatiu, </h1>
          <h1> A Fullstack & Community Developer (Microsoft)</h1>
          <p>Passionate  about creative problem solving and creating meaningful user experiences.
          Interested in education, human-to-computer communication, sustainability, and accessibility.
            </p>
        </div>
      </div>

      <div className="section2">
        <div className="sub-sec2">
          <img src={ft} alt="Logo Img" />
        </div>
      </div>

    </div>
  )
}
