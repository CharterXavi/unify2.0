import './colors.css'

import CodeDocs from '../components/documentation/colors/code'
import ColorsIcon from '../components/icons/colors'
import DesignDocs from '../components/documentation/colors/design'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'
import { colorCode } from '../components/documentation/colors/colorCode'
import {useState} from 'react'

const ColorsPage = () => {

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
      <SEO title="Colors" />
      <div className='page ColorsPage'>
        <Header content='Colors' icon={<ColorsIcon />} />
        <section className="content-container">
          <TabBlock 
            figmaLink='https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0gRltFGyJQXtNrahIJTvem%2FGuidelines%3Fnode-id%3D6%253A20&amp;chrome=DOCUMENTATION'
            code={colorCode}
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