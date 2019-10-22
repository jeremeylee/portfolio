import React from "React"
import Layout from "../components/layout"
import JSONDATA from "../content/portfolio-content.json"

const ProjectsPage = () => {
  return (
    <Layout>
      <div>
        {JSONDATA.content.map(data => (
          <p>{data.title}</p>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
