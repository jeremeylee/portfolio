import React from "React"
import Layout from "../components/layout"
import JSONDATA from "../content/portfolio-content.json"
import Project from "../components/project"

const ProjectsPage = () => {
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
          />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
