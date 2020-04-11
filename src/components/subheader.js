
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import "./layout.css"

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: `0px`,
    width: `100%`,
    height: `450px`,
    paddingBottom: `0px`,
    paddingTop: `80px`,
 //   background: `linear-gradient(to right, rgb(237, 229, 116), rgb(225, 245, 196))`,
    background: `linear-gradient(to right, rgb(60, 165, 92), rgb(181, 172, 73)) !important`,
    display: `grid`,
  //  opacity: `0.3`,
    
  },
  img: {
    '&::before': {
//      opacity: `0.3 !important`,
    },
    opacity: `0.3 !important`,
    //width: `100%`,
    backgroundPosition: `center center`,
    backgroundRepeat: `None`,
    backgroundSize: `cover`,
    //backgroundPositionY: `center`,
  },
  img_title: {
    textAlign: `center`,
    color: `#cbeccb85`,
 //   marginTop: `50px`,
 //   zIndex:`-10`,
   fontFamily: `cursive`,
   //opacity: `0`,
  },
}));

const Subeader = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "11.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
return(
    <div className={classes.content}>
      <BackgroundImage 
        className={classes.img} 
        fluid={data.placeholderImage.childImageSharp.fluid}
      >
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'>
          <span>
          <h2 id='img_title' className={classes.img_title}>
          <span className='img_title title_1'>
            N
          </span>
          <span className='img_title title_2'>
            a
          </span>
          <span className='img_title title_3'>
            m
          </span>
          <span className='img_title title_4'>
            i
          </span>
          <span className='img_title title_5'>
            b
          </span>
          <span className='img_title title_6'>
            i
          </span>
          <span className='img_title title_7'>
            a
          </span>
          </h2>
          </span>
          <br></br>
        </div>
      </BackgroundImage>
    </div>
  );
}

export default Subeader
