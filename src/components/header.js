
import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types"
import "./layout.css"

const useStyles = makeStyles((theme) => ({
}));

function search(event, list) {
  let return_list = []
  //console.log(event.target.value);
  //console.log(list);
  list.forEach(item => {
    if(item.node.frontmatter.title.indexOf(event.target.value) > -1){
      return_list.push(item.node.frontmatter);
    }
  });
  console.log(return_list)
  //console.log(data)
}

const Header = ({ siteTitle, subtitle }) => {
//export default ({ siteTitle, props }) => {
  const classes = useStyles();

  const query = useStaticQuery(graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
        }
      }
    }
  } 
`)
const [data, setData] = useState(query);
console.log(data)

  return(
    <header
      className='header'
    >
    <div
      className='header_dev'
    >
        <h1 className='title'>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              fontSize: `30px`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p className='subtitle'>{subtitle}</p>
      </div>
      <div className='form_dev'>
        <p className='serach_p'>
          <Paper component="form" className='search_article search_article_locate'>
            <InputBase
              className='input'
              placeholder="Not yet activated"
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={(event) => {search(event, data.allMarkdownRemark.edges)}}
            />
            <IconButton type="" className='iconButton' aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </p>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
/*






import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
*/