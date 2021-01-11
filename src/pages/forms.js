import FormsIcon from '../components/icons/form'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const FormsPage = () => {

  return (
    <Layout>
      <SEO title="Forms" />
      <div className='page FormsPage'>
        <Header content='Forms' icon={<FormsIcon />} />
        <section className="content-container">
          
        </section>
      </div>
    </Layout>
  )
}

export default FormsPage