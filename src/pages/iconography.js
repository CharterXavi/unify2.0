import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import NetworkIcon from '../components/icons/network'
import React from "react"
import SEO from "../components/seo"

const IconographyPage = () => {

  return (
    <Layout>
      <SEO title="Iconography" />
      <div className='page IconographyPage'>
        <Header content='Iconography' icon={<NetworkIcon />} />
        <section className="content-container">
          
        </section>
      </div>


      <FooterNav 
        prevLink='/buttons'
        prevPage='← Buttons'
        nextLink='/forms'
        nextPage='Forms →'
      />
    </Layout>
  )
}

export default IconographyPage