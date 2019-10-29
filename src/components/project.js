import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import "./project.css"
import TechCard from "./techcard"

const Project = props => {
  const techs = props.tech.split(",")
  return (
    <div class="project-card">
      <div class="image">
        <Img draggable="false" fluid={props.image} />
      </div>
      <div class="content-background">
        <div class="project-content">
          <div class="description">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <div>
            {techs.map(tech => (
              <TechCard tech={tech} />
            ))}
          </div>
          <div class="button-container">
            <a class="demo-button" target="_blank" href={props.live}>
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a class="live-button" target="_blank" href={props.source}>
              <FontAwesomeIcon icon={faGithub} /> View Source
            </a>
          </div>
        </div>
      </div>
      {/* <div class="image">
        <Img draggable="false" fluid={props.image} />
      </div> */}
    </div>
  )
}

export default Project
