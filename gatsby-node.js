const path = require(`path`)
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
console.log(result)
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

