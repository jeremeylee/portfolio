import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typist from "react-typist"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import ContactJSON from "../content/contact.json"
import resume from "../content/2019_JeremeyLee_Resume.pdf"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div
      style={{
        marginTop: "200px",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          <Typist>Hey, I'm Jeremey Lee</Typist>
        </h1>
        <p style={{ textAlign: "center" }}>
          I'm a software engineer who specializes in full-stack web development
          <br />
          This portfolio is permanently under development &#128565;
        </p>
      </div>
      <div class="button-container">
        <a class="info-button" href={ContactJSON.info.github}>
          Github <FontAwesomeIcon icon={faGithub} />
        </a>
        <a class="info-button" href={resume}>
          Resume <FontAwesomeIcon icon={faFilePdf} />
        </a>
        <a class="info-button" href={ContactJSON.info.linkedin}>
          Linkedin <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
