import '../Styles/Projects.scss'
import React from 'react'
import Card from '../util/Card'
import cards from '../util/ProjectsCollection'

export default function Projects() {
  
  return (
    <div className="project-component" id="projects">
      {/* <div>
        <h1>Projects</h1>
      </div> */}
      {cards && cards.map(card => (
        <Card card={card} />
      ))}
    </div>
  )
}
