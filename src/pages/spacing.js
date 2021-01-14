import CodeDocs from '../components/documentation/spacing/code'
import DesignDocs from '../components/documentation/spacing/design'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import RulerIcon from '../components/icons/ruler'
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'
import {spacingCode} from '../components/documentation/spacing/spacingCode'
import {useState} from 'react'

const SpacingPage = () => {

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
      <SEO title="Spacing" />
      <div className='page SpacingPage'>
        <Header content='Spacing' icon={<RulerIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FGuidelines%3Fnode-id%3D4%253A2&chrome=DOCUMENTATION'
            code={spacingCode}
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
          prevLink='/typography'
          prevPage='← Typography'
          nextLink='/buttons'
          nextPage='Buttons →'
        />
      </div>
    </Layout>
  )
}

export default SpacingPage