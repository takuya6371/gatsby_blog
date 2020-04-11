
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: `0px`,
    width: `100%`,
    height: `450px`,
    paddingBottom: `0px`,
    paddingTop: `80px`,
 //   background: `linear-gradient(to right, rgb(237, 229, 116), rgb(225, 245, 196))`,
    background: `linear-gradient(to right, rgb(60, 165, 92), rgb(181, 172, 73))`,
    display: `grid`,
    zIndex:`10000`,
    
  },
  img: {
    '&::before': {
      opacity: `0.3 !important`,
    },
    //width: `100%`,
    backgroundPosition: `center center`,
    backgroundRepeat: `None`,
    backgroundSize: `cover`,
    //backgroundPositionY: `center`,
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
      />
    </div>
  );
}

export default Subeader
