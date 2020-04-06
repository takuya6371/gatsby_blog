import { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"

export default function useArticles(){
  const [data, setData] = useState('');

  // コンポーネント間で再利用したいロジック
  console.log('setallArticle')
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
  setData(query);
  return data;
}
