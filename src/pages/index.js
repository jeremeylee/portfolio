import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typist from "react-typist"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div
      style={{
        marginTop: "200px",
      }}
    >
      <h1>
        <Typist>Hey, I'm Jeremey Lee</Typist>
      </h1>
      <p>
        I'm a software engineer who specializes in full-stack web development
        <br />
        This portfolio is permanently under development &#128565;
      </p>
    </div>
  </Layout>
)

export default IndexPage
