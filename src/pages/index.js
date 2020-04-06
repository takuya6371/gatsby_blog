import React, { useState, useEffect } from 'react';
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles';
import useArticles from '../components/useArticles';

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
  tags : {
    color: `green`,
  }
}));


const IndexPage = ({data}) => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.article_list_dev}>
        <h1></h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={`/${node.frontmatter.slug}`} className={classes.title}>
            <article key={node.frontmatter.slug}　className={classes.article}>
                {node.frontmatter.title}
                <p>{node.excerpt}</p>
                <p className={classes.tags}>#{node.frontmatter.tags}</p>
                <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
            </article>
          </Link>
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