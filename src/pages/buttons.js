import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import ShapesIcon from '../components/icons/shapes'

const ButtonsPage = () => {

  return (
    <Layout>
      <SEO title="Buttons" />
      <div className='page ButtonsPage'>
        <Header content='Buttons' icon={<ShapesIcon />} />
        <section className="content-container">
          
        </section>
      </div>
    </Layout>
  )
}

export default ButtonsPage