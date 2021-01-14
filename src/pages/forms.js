import CodeDocs from '../components/documentation/forms/code'
import DesignDocs from '../components/documentation/forms/design'
import FooterNav from '../components/footer/footernav'
import FormsIcon from '../components/icons/form'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'
import {formCode} from '../components/documentation/forms/formCode'
import {useState} from 'react'

const FormsPage = () => {

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
      <SEO title="Forms" />
      <div className='page FormsPage'>
        <Header content='Forms' icon={<FormsIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FGuidelines%3Fnode-id%3D6%253A28&chrome=DOCUMENTATION'
            code={formCode}
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
        prevLink='/iconography'
        prevPage='← Iconography'
        nextLink='/logos'
        nextPage='Logos →'
      />
    </Layout>
  )
}

export default FormsPage