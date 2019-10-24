import React from "React"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import JSONDATA from "../content/portfolio-content.json"
import Project from "../components/project"

const ProjectsPage = ({ data }) => {
  const images = data.allImageSharp.edges.map(edge => edge.node.fluid)
  return (
    <Layout>
      <div>
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

export default ProjectsPage
