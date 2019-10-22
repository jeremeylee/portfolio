import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <div
    style={{
      display: "flex",
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </div>
)

export default Navigation
