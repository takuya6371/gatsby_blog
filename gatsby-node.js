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
              tags,
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
/*
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: 'category/' + node.frontmatter.category1,
      component: path.resolve(`./src/pages/category.js`),
      context: {
        category1: node.frontmatter.category1
      }
    })
  })
  */
}

