
import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types"
import "./layout.css"

const useStyles = makeStyles((theme) => ({

}));

function searchChange(inputValue) {
  this.state.setSearchValue(inputValue)


}

const Header = ({ siteTitle, subtitle }) => {
//export default ({ siteTitle, props }) => {
  const classes = useStyles();
  useEffect(() => {
    console.log('Use effect')
  })
  console.log('nomal')
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
const [searchValue, setSearchValue] = useState('');
//const [buttonStyle, setBottonStyle] = useState('disableink');
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
              value={searchValue}
              placeholder="Keyword in title or tag"
      //        inputProps={{ 'aria-label': 'search google maps' }}
              onChange={(event) => {setSearchValue(event.target.value)}}
            />
            <Link to={'/search/'+searchValue} className={searchValue === '' ? 'disabled-link' : 'eabled-link' } >
            <IconButton type="" className='iconButton' aria-label="search">
              <SearchIcon/>
            </IconButton>
            </Link>
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