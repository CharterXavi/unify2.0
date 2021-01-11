import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import VisionIcon from '../components/icons/vision'

const PurposePage = () => {

  return (
    <Layout>
      <SEO title="Purpose" />
      <div className='page PurposePage'>
        <Header content='Purpose & Vision' icon={<VisionIcon />} />
        <section className="content-container">

        </section>

        <FooterNav 
          prevLink='/guidelines'
          prevPage='← Guidelines'
          nextLink='/colors'
          nextPage='Colors →'
        />
      </div>
    </Layout>
  )
}

export default PurposePage