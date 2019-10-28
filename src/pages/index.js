import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typist from "react-typist"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>
      <Typist>Hey, I'm Jeremey Lee</Typist>
    </h1>

    <hr />
    <p>I'm a software engineer who specializes in full-stack development</p>
  </Layout>
)

export default IndexPage
