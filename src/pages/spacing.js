import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import RulerIcon from '../components/icons/ruler'
import SEO from "../components/seo"

const SpacingPage = () => {

  return (
    <Layout>
      <SEO title="Spacing" />
      <div className='page SpacingPage'>
        <Header content='Spacing' icon={<RulerIcon />} />
        <section className="content-container">

        </section>
      </div>
    </Layout>
  )
}

export default SpacingPage