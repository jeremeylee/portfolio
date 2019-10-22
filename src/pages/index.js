import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey, I'm Jeremey Lee</h1>
    <hr />
    <p>I'm a software engineer who specializes in full-stack development</p>
  </Layout>
)

export default IndexPage
