import React from "react"
import { graphql, Link, useState } from "gatsby"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles';

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
    fontSize: `18px`,
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


export default ({data, location}) => {
  const classes = useStyles();
  //let search_word = ''
  console.log(location)
  const [search_word, setSearch_word] = useState();
  console.log(search_word)
  if (location.state){
    setSearch_word(location.state.search_word)
  }

  let result = []
  console.log(search_word)
  console.log(data.allMarkdownRemark.edges)
  data.allMarkdownRemark.edges.map((row) => {
    if (row.node.frontmatter.title.indexOf(search_word) > -1){
      result.push(row)
    }
  })
console.log(result)
return (
    <Layout>
      <div className='post_dev'>
        <p>
          「{search_word}」が含む記事一覧
        </p>
        <p>
          件
        </p>
        <div className='contents_dev'>
        {result.map(({ node }) => (
            <article key={node.frontmatter.slug}　className={classes.article}>
              <div className={classes.div_list}>
                <Link to={`/${node.frontmatter.slug}`} className={classes.title}>
                  <p>{node.frontmatter.title}</p>
                  <p className={classes.except}>{node.excerpt}</p>
                </Link>
              </div>
              <time className={classes.time} dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
              <p className={classes.tags}>
                {Object.values(node.frontmatter.tags).map(tag => (
                  <span>#{tag}&nbsp;&nbsp;&nbsp;</span>
                ))}
              </p>
            </article>
      ))}
      </div>

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