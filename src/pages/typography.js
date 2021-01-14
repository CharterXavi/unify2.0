import CodeDocs from '../components/documentation/typography/code'
import DesignDocs from '../components/documentation/typography/design'
import FooterNav from '../components/footer/footernav'
import Header from '../components/header/header'
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TabBlock from '../components/tabs/tab-block'
import TypographyIcon from '../components/icons/typography'
import {typographyCode} from '../components/documentation/typography/typographyCode'
import {useState} from 'react'

const TypographyPage = () => {

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