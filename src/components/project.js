import React from "react"
import "./project.css"
import TechCard from "./techcard"

const Project = props => {
  const techs = props.tech.split(",")
  return (
    <div class="project-card">
      <div class="content-background">
        <div class="project-content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div>
            {techs.map(tech => (
              <TechCard tech={tech} />
            ))}
          </div>

          <p>{props.live}</p>
          <p>{props.source}</p>
        </div>
      </div>
    </div>
  )
}

export default Project
