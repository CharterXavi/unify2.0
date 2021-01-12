import ColorsIcon from '../components/icons/colors'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'

const ColorsPage = () => {

  const colorsCode = `
    :root {
      --primary-accent: #F22C57;
      --pink-sherbet: #F493AA;
      --light-accent: #f2d1c9;
      --heading-color: #282e3e;
      --clinic-blue: #CED3DC;
      --light-clinic-blue: #F6F7FB;
      --maximum-blue: #0FBDBD;
      --scrubs-blue: #546182;
      --detail-grey: #535968;
      --rose: linear-gradient(180deg, #F493AA 0%, #F05F7E 100%);
      --sunset: linear-gradient(66.41deg, #F3476C 24.79%, #FFCE94 85.46%);
      --mist: linear-gradient(90deg, #F493AA 0%, #F2D1C9 100%);
      --ocean: linear-gradient(270deg, #0FBDBD -7.32%, #363F55 100%);
      --super-gradient: linear-gradient(66.41deg, #F14D70 14.26%, #FF008A 34.32%, #FF446C 53.87%, #FFB016 87.46%);
      --hero-gradient-white: linear-gradient(90deg, #FFFFFF 42.19%, #F493AA 61.98%);
      --hero-gradient-light: linear-gradient(90deg, #F6F7FB 42.19%, #F493AA 61.98%);
      --hero-gradient-dark: linear-gradient(90deg, #282e3e 42.19%, #F493AA 61.98%);
      --hero-gradient-colorful: linear-gradient(180deg, #282e3e 0%, #2C3959 47.92%, #F05F7E 100%);
      --standard-shadow: 0px 0px 15px rgba(0, 0, 0, 0.10);
      --button-shadow: 0px 5px 12px rgba(0, 0, 0, 0.22);
      --nav-shadow: 0px 7px 15px 0px rgba(0,0,0,0.2);
      --inset-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
      --wave-shadow-top: 0px -5px 15px rgba(0, 0, 0, 0.75);
      --wave-shadow-bottom: 0px 5px 15px rgba(0, 0, 0, 0.75);
    }
  `.trim();

  return (
    <Layout>
      <SEO title="Colors" />
      <div className='page ColorsPage'>
        <Header content='Colors' icon={<ColorsIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FGuidelines%3Fnode-id%3D6%253A20&amp;chrome=DOCUMENTATION'
            code={colorsCode}
          />
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