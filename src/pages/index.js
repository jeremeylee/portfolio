import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey, what's good! I'm Jeremey Lee, a software engineer</h1>
    <p>Most of my work revolves around full-stack web development</p>
    <p>
      The main technologies that I use are Javascript, React, Node.js, HTML, and
      CSS
    </p>
    <p>Want more from me? Ask and you shall receive</p>
    <Link to="/#test">test</Link>
    <Link to="/#test2">test2</Link>
    <Link to="/#test3">test3</Link>
    <div
      id="test"
      style={{
        width: "500px",
        height: "600px",
        background: "red",
      }}
    ></div>
    <div
      id="test2"
      style={{
        width: "500px",
        height: "600px",
        background: "green",
      }}
    ></div>
    <div
      id="test3"
      style={{
        width: "500px",
        height: "600px",
        background: "yellow",
      }}
    ></div>
  </Layout>
)

export default IndexPage
