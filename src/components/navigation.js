import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./navigation.css"
const Navigation = () => (
  <div class="navigation-container">
    <AniLink class="button" style={{ marginRight: "50px" }} fade to="/">
      Home
    </AniLink>
    <AniLink class="button" style={{ marginRight: "25px" }} fade to="/projects">
      Projects
    </AniLink>
  </div>
)

export default Navigation
