import ColorsIcon from '../components/icons/colors'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const ColorsPage = () => {

  return (
    <Layout>
      <SEO title="Colors" />
      <div className='page ColorsPage'>
        <Header content='Colors' icon={<ColorsIcon />} />
        <section className="content-container">
          
        </section>
      </div>


      <FooterNav 
        prevLink='/purpose'
        prevPage='← Purpose & Vision'
        nextLink='/typography'
        nextPage='Typography →'
      />
    </Layout>
  )
}

export default ColorsPage