import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./navigation.css"
const Navigation = () => (
  <div class="navigation-container">
    <AniLink fade to="/">
      Home
    </AniLink>
    <AniLink fade to="/projects">
      Projects
    </AniLink>
  </div>
)

export default Navigation
