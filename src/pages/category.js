import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>aaaa</h1>
  </Layout>
)
/*
export default ({ data }) => (
  <Layout>
    <h1></h1>
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

export const query = graphql`
query($caterory1: String!) {
  markdownRemark(frontmatter: { category1: { eq: $caterory1 } }) {
    html
    frontmatter {
      title
      date(formatString: "YYYY年MM月DD日")
      slug
      caterory1
    }
  }
}
`