const path = require(`path`)

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions } = gatsbyNodeHelpers
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug,
              date,
              category1
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.frontmatter.slug,
        date: node.frontmatter.date
      }
    })
  })
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/pages/category.js`),
      context: {
        slug: node.frontmatter.slug,
        date: node.frontmatter.date,
        category1: node.frontmatter.category1
      }
    })
  })
}

