import React from "react"
import { Link } from "gatsby"

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
  </Layout>
)

export default IndexPage
