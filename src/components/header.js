import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  search_article: {
    padding: '0px 3px',
    display: 'flex',
    alignItems: 'center',
    width: 270,
    height: 35,
    borderRadius: `25px`,
    float: `right`,
    marginTop: `10px`,
  },
  title: {
    float: `left`,
    marginTop: `5px`,
    marginBottom: `0px`,
  },
  header: {
    // background: `rebeccapurple`,
    marginBottom: `1.45rem`,
    position: `fixed`,
    width: `100%`,
    paddingBottom: `0px`,
    //background: `linear-gradient(to right, rgb(0, 65, 106), rgb(121, 159, 12), rgb(255, 224, 0))`,
    background: `linear-gradient(to right, rgb(22, 160, 133), rgb(244, 208, 63))`,
  },
  header_dev: {
    paddingLeft: `10px`,
    paddingRight: `10px`,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
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
/*
  useEffect(() => {
    console.log("query")
  });
*/
  //console.log(data)
}

const Header = ({ siteTitle }) => {
//export default ({ siteTitle, props }) => {
  const classes = useStyles();
/*
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
*/
  return(
    <header
      className={classes.header}
    >
    <div
      className={classes.header_dev}
    >
        <h1 className={classes.title}>
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
        <Paper component="form" className={classes.search_article}>
          <InputBase
            className={classes.input}
            placeholder="Please input keyword"
            inputProps={{ 'aria-label': 'search google maps' }}
//            onChange={(event) => {search(event, data.allMarkdownRemark.edges)}}
          />
          <IconButton type="" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

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