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
          <div className="two-column">
            <div className="title">
              <h3>UNIFY - The Charter Design System</h3>
              <p>
                At Charter, our healthcare providers are ultimately focused on positively impacting their patients and providing the best possible healthcare experience.
                In the modern age of technology and internet, we want to ensure that we are also providing the best possible online Charter experience to extend our
                positive impact into the digital sphere. This design system helps us accomplish just that - by unifying our digital design and making sure it properly
                communicates our company's values, we can create digital products that impact our patients and others just as positively as our healthcare initiatives.
              </p>
            </div>
            <div className="content">
              <div className="left">
                <h6 className='detail-title'>Make it intuitive</h6>
                <p className="detail-text">
                  We want our interfaces and platforms to make sense, plain and simple. No user should have to work too hard to find and interact with anything they need.
                </p>
                <h6 className='detail-title'>Make it immersive</h6>
                <p className="detail-text">
                  We want gorgeous, modern designs that draw users in. We want tactful, playful animations, hover effects, and motion implementations, and colors.                </p>
              </div>
              <div className="right">
                <h6 className='detail-title'>Make it flexible</h6>
                <p className="detail-text">
                  We want to grow and evolve this system over time. We want this system to drive our ability to adapt, not to confine us rigidly into certain design patters.
                </p>
              </div>
            </div>
          </div>
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