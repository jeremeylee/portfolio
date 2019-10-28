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
    <p>
      <div>
        I'm a software engineer who specializes in full-stack web development
      </div>
      <div>This portfolio is permanently under development</div>
    </p>
  </Layout>
)

export default IndexPage
