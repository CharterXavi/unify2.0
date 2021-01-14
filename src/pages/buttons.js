import CodeDocs from '../components/documentation/buttons/code'
import DesignDocs from '../components/documentation/buttons/design'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import ShapesIcon from '../components/icons/shapes'
import TabBlock from '../components/tabs/tab-block'
import {buttonCode} from '../components/documentation/buttons/buttonCode'
import {useState} from 'react'

const ButtonsPage = () => {

  const [showDesignContent, setShowDesignContent] = useState(true);
  const [showCodeContent, setShowCodeContent] = useState(false);
  
  const handleDesignContent = () => {
    setShowDesignContent(true);
    if(showCodeContent === true) {
      setShowCodeContent(false);
    }
  }
  const handleCodeContent = () => {
    setShowCodeContent(true);
    if(showDesignContent === true) {
      setShowDesignContent(false);
    }
  }
  return (
    <Layout>
      <SEO title="Buttons" />
      <div className='page ButtonsPage'>
        <Header content='Buttons' icon={<ShapesIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FGuidelines%3Fnode-id%3D6%253A26&chrome=DOCUMENTATION'
            code={buttonCode}
            language='jsx'
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
      </div>

      <FooterNav 
        prevLink='/spacing'
        prevPage='← Spacing'
        nextLink='/iconography'
        nextPage='Iconography →'
      />
    </Layout>
  )
}

export default ButtonsPage