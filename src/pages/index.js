import Hero from "../components/hero/hero"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const BlogIndex = () => {

  return (
    <Layout>
      <SEO title="All posts" />
      <div className="HomePage">
        <Hero />
        HOME PAGE
      </div>
    </Layout>
  )
}

export default BlogIndex
