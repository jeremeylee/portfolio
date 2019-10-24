import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import JSONDATA from "../content/portfolio-content.json"
import Project from "../components/project"

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.edges.map(edge => edge.node.fluid)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Hey, I'm Jeremey Lee</h1>
        <hr />
        <p>I'm a software engineer who specializes in full-stack development</p>
      </div>

      <div id="projects">
        {JSONDATA.content.map((data, index) => (
          <Project
            key={index}
            title={data.title}
            description={data.description}
            tech={data.tech}
            live={data.live}
            source={data.source}
            image={images[index]}
          />
        ))}
      </div>
    </Layout>
  )
}

export const imageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid(maxHeight: 400, maxWidth: 300) {
            src
            srcSet
            base64
            aspectRatio
            originalImg
            sizes
          }
        }
      }
    }
  }
`

export default IndexPage
