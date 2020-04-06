import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
/*
const categoryPage = ({ data }) => (
  <Layout>
    <h1>{data}</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <article key={node.frontmatter.slug}>
        <h2>
          <Link to={`/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
        <p>{node.excerpt}</p>
      </article>
    ))}
  </Layout>
)
*/
export default ({ data }) => {
  console.log(data)
  // const post = data
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <h2>
            <Link to={`/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
        </article>
      ))}
  </Layout>
  )
}
/*
export const query = graphql`
query($category1: String!) {
  allMarkdownRemark (filter: {frontmatter: {category1: {eq: $category1}}}) {
    edges {
      node {
        frontmatter {
          category1
          date(formatString: "")
          slug
          title
        }
      }
    }
  }
}
`
*/
export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY/M/D")
            slug
          }
          excerpt
        }
      }
    }
  }
`