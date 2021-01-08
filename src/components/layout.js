/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import Chatbot from './chatbot/chatbot';
import Footer from "./footer/footer"
import PropTypes from "prop-types"
import React from "react"
import Sidebar from "./sidebar/sidebar"

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <main>
        {children}
        <Chatbot />
        <Footer />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
