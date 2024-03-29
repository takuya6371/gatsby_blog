
import React from 'react';
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles';
//import useArticles from '../components/useArticles';
import Subheader from "../components/subheader"

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: `none`,
    color: `black`,
    fontSize: `25px`,
    fontWeight: `200`,
  },
  article_list_dev: {
  },
  article: {
    borderBottom: `1px solid rgba(150, 172, 179, 0.3)`,
    marginBottom: `10px`,
  },
  except: {
    fontSize: `18px`,
    marginBottom: `0.45rem`,
  },
  time: {
    fontSize: `18px`,
  },
  div_list: {
    '&:hover': {
      backgroundColor: `#cbeccb`,
    }
  },
}));


const IndexPage = ({data}) => {
  const classes = useStyles();
  return (
    <Layout>
      <Subheader className={classes.subheader}/>
      <div className='contents_dev'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <article key={node.frontmatter.slug}　className={classes.article}>
              <div className={classes.div_list}>
                <Link to={`/${node.frontmatter.slug}`} className={classes.title}>
                  <p>{node.frontmatter.title}</p>
                  <p className={classes.except}>{node.excerpt}</p>
                </Link>
              </div>
              <time className={classes.time} dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
              <p className=''>
                {Object.values(node.frontmatter.tags).map(tag => (
                  <Link to={`/tags/${tag}`} className='tags_p'>
                    <span>#{tag}&nbsp;&nbsp;&nbsp;</span>
                  </Link>
                ))}
              </p>
            </article>
      ))}
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY/M/D")
            slug
            tags
          }
          excerpt
        }
      }
    }
  }
`
export default IndexPage
