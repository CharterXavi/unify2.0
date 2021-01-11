import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TypographyIcon from '../components/icons/typography'

const TypographyPage = () => {

  return (
    <Layout>
      <SEO title="Typography" />
      <div className='page TypographyPage'>
        <Header content='Typography' icon={<TypographyIcon />} />
        <section className="content-container">
          
        </section>

        <FooterNav 
          prevLink='/colors'
          prevPage='← Colors'
          nextLink='/spacing'
          nextPage='Spacing →'
        />
      </div>
    </Layout>
  )
}

export default TypographyPage