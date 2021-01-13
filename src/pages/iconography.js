import React, {useState} from "react"

import CodeDocs from '../components/documentation/iconography/code'
import DesignDocs from '../components/documentation/iconography/design'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import NetworkIcon from '../components/icons/network'
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'
import {iconographyCode} from '../components/documentation/iconography/iconographyCode'

const IconographyPage = () => {

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
      <SEO title="Iconography" />
      <div className='page IconographyPage'>
        <Header content='Iconography' icon={<NetworkIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FCharter-Design-System%3Fnode-id%3D925%253A70&chrome=DOCUMENTATION'
            code={iconographyCode}
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
        prevLink='/buttons'
        prevPage='← Buttons'
        nextLink='/forms'
        nextPage='Forms →'
      />
    </Layout>
  )
}

export default IconographyPage