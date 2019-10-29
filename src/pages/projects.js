import React from "React"
import { graphql } from "gatsby"
import Typist from "react-typist"
import Layout from "../components/layout"
import PortfolioJSON from "../content/portfolio-content.json"
import ContactJSON from "../content/contact.json"
import Project from "../components/project"

const ProjectsPage = ({ data }) => {
  const images = data.allImageSharp.edges.map(edge => edge.node.fluid)
  return (
    <Layout>
      <div>
        <h1>
          <Typist>Projects</Typist>
        </h1>
        <hr />
        <p>
          A showcase of the projects I worked on. If you want to see more check
          out my <a href={ContactJSON.info.github}>Github</a>
        </p>
      </div>
      <div>
        {PortfolioJSON.content.map((data, index) => (
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
          fluid(maxHeight: 400, maxWidth: 900) {
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
