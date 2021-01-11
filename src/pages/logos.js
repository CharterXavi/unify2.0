import FlowerIcon from '../components/icons/flower'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const LogosPage = () => {

  return (
    <Layout>
      <SEO title="Logos" />
      <div className='page LogosPage'>
        <Header content='Logos' icon={<FlowerIcon />} />
        <section className="content-container">
          
        </section>
      </div>
    </Layout>
  )
}

export default LogosPage