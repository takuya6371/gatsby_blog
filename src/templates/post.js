import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: `grid`,
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

export default ({ data }) => {
  const classes = useStyles();
  const post = data.markdownRemark
  return (
    <Layout>
      <div className='contents_dev post_dev'>
        <div className='post_title'>
          <h1>{post.frontmatter.title}</h1><br></br>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($date: Date!) {
    markdownRemark(frontmatter: { date: { eq: $date } }) {
      html
      frontmatter {
        title
      }
    }
  }
`