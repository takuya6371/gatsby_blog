/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

//import React from "react"
import React, { useState } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: `130px`,
    paddingLeft: `60px`,
    paddingRight: `60px`,
  },
}));
const Layout = ({ children }) => {
  
  const dataTitle = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
console.log(dataTitle)
console.log(children)
// 
const classes = useStyles();
  return (
    <>
      <Header siteTitle="dataTitle" />
      <div>
        <main className={classes.main}>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
