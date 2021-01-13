import CodeDocs from '../components/documentation/typography/code'
import DesignDocs from '../components/documentation/typography/design'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'
import TypographyIcon from '../components/icons/typography'
import {useState} from 'react'

const TypographyPage = () => {
  //Code for COLORS documentation
  const typographyCode = `
    h1, h2, h4, h5, h6 {
      font-family: 'Nunito', sans-serif;
      text-align: left;
    }
    h1 {
      color: var(--primary-accent);
      font-size: 4.75em;
      padding: 16px 0;
      margin: 0 0;
      letter-spacing: 0px;
      font-weight: 600;
    }
    h2 {
      font-size: 3.5em;
      font-weight: 600;
      padding: 16px 0;
      margin: 0 0;
      letter-spacing: -0.5px;
      color: var(--primary-accent);
    }
    h3 {
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      color: var(--primary-accent);
      font-size: 2.75em;
      padding: 16px 0;
      margin: 0 0;
      letter-spacing: 0px;
    }
    h4 {
      font-size: 2em;
      padding: 8px 0;
      margin: 0 0;
      letter-spacing: 0.25px;
      font-weight: 700;
      color: var(--primary-accent);
    }
    h5 {
      font-size: 1.5em;
      padding: 8px 0;
      margin: 0 0;
      letter-spacing: 0px;
      font-weight: 700;
      color: var(--primary-accent);
    }
    h6 {
      font-size: 1.25em;
      padding: 8px 0;
      margin: 0 0;
      letter-spacing: 0.15px;
      font-weight: 700;
      color: var(--heading-color);
    }
    p {
      color: var(--detail-grey);
      font-size: 1em;
      width: 100%;
      padding: 8px 0;
      margin: 0 0;
      font-weight: 400px;
      letter-spacing: 0.5px;
    }
    .detail-title {
      font-family: 'Nunito', sans-serif;
      font-size: 0.9em;
      font-weight: bold;
      width: auto;
      color: var(--heading-color);
      border-left: 2px solid var(--primary-accent);
      padding: 0px 0px 0px 16px;
      margin: 8px 0px 0px;
    }
    .detail-text {
      font-family: 'Nunito', sans-serif;
      font-size: 0.9em;
      color: var(--detail-grey);
    }
    .button-text {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9em;
      letter-spacing: 1.25px;
    }
  `.trim();

  const [showDesignContent, setShowDesignContent] = useState(true);
  const [showCodeContent, setShowCodeContent] = useState(false);
  
  const handleDesignContent = () => {
    setShowDesignContent(true);
    if(showCodeContent == true) {
      setShowCodeContent(false);
    }
  }
  const handleCodeContent = () => {
    setShowCodeContent(true);
    if(showDesignContent == true) {
      setShowDesignContent(false);
    }
  }

  return (
    <Layout>
      <SEO title="Typography" />
      <div className='page TypographyPage'>
        <Header content='Typography' icon={<TypographyIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FGuidelines%3Fnode-id%3D6%253A22&chrome=DOCUMENTATION'
            code={typographyCode}
            language='css'
            showDesign={handleDesignContent}
            showCode={handleCodeContent}
          />

          <div className={`design-content ${showDesignContent ? 'show' : ''}`}>
            <DesignDocs />
          </div>
          <div className={`code-content ${showCodeContent ? 'show' : ''}`}>
            <CodeDocs />
          </div>
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