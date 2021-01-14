import ButtonPrimary from '../components/buttons/button-primary'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="page 404Page">
        <Header 
          content='404: Page not found'
        />
        <section className="content-container">
          <div className="two-column">
            <div className="title">
              <h4>404 ERROR</h4>
              <p>You just hit a route that doesn&#39;t exist... whoops!.</p>
              <hr/>
              <ButtonPrimary link='/' content='Back to home page'/>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
