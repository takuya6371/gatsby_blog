import React, {useState} from "react"
import { useStaticQuery, Link } from "gatsby"
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


export default ({location}) => {
  const classes = useStyles();
  const path_split = location.pathname.split('/')
  const search_word = decodeURI(path_split[[path_split.length - 1]])
  const query = useStaticQuery(graphql`
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
`)
  let result = []
  query.allMarkdownRemark.edges.map((row) => {
    if (row.node.frontmatter.title.indexOf(search_word) > -1){
      result.push(row)
    } else {
      row.node.frontmatter.tags.forEach(row_tag => {
        if (row_tag.indexOf(search_word) > -1){
          result.push(row)
        }
      });
    } 
  })
const article_cnt = result.length
return (
    <Layout>
      <div className='post_dev'>
        <p>
          タグ「{search_word}」が含む記事一覧
        </p>
        <p>
          {article_cnt}件
        </p>
      </div>
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