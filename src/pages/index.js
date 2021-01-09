import './index.css'

import Grid from "../components/cardGrid/grid"
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
        <section className='content-container'>
            <div class='home'>
                <p id='home'></p>
                <h3>Welcome.</h3>
                <p><span>UNIFY</span> by Charter Healthcare Group is a comprehensive design system. It's essentially a collection of user interface and user experience designs that serve as the single source of truth for our digital experiences across many different platforms.</p>
                <p>To get started, jump on in to any of the design system's components:</p>
            </div>
            <Grid />
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex
