import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <img width="300" src="https://res.cloudinary.com/dra8adhvz/image/upload/c_scale,w_500/v1559981488/icon-white-transparent_kr90l8.png" alt="JA icon"></img>
      <ul className="social-icons">
        <li>
          <a href="https://github.com/jeffaustin81" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-github-square"></span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jefferyaustin" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-linkedin"></span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jeffaustin81" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-twitter-square"></span>
          </a>
        </li>
      </ul>
  </Layout>
)

export default IndexPage
