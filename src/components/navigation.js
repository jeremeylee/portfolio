import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navigation = () => (
  <div
    style={{
      display: "flex",
    }}
  >
    <AniLink fade to="/">
      Home
    </AniLink>
    <AniLink fade to="/projects">
      Projects
    </AniLink>
    <AniLink fade to="/contact">
      Contact
    </AniLink>
  </div>
)

export default Navigation
