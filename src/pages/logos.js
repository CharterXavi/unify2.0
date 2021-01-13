import CodeDocs from '../components/documentation/logos/code'
import DesignDocs from '../components/documentation/logos/design'
import FlowerIcon from '../components/icons/flower'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'
import {logoCode} from '../components/documentation/logos/logoCode'
import {useState} from 'react'

const LogosPage = () => {

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
      <SEO title="Logos" />
      <div className='page LogosPage'>
        <Header content='Logos' icon={<FlowerIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FCharter-Design-System%3Fnode-id%3D7745%253A0'
            code={logoCode}
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

        <FooterNav 
          prevLink='/forms'
          prevPage='← Forms'
          nextLink='/'
          nextPage='Home →'
        />
      </div>
    </Layout>
  )
}

export default LogosPage