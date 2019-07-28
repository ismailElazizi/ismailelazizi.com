import { graphql } from 'gatsby'
import React from 'react'
import Article from '../components/article'
import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="mainH">Blog</h1>
      <p>Ok. I know you are busy so I'll get straight to the point.</p>
    </div>
    <div className="posts-wrapper">
      {data.allMediumPost.edges.map(elment => (
        <Article key={elment.node.id} post={elment.node} />
      ))}
    </div>
  </Layout>
)

export default BlogPage
export const pageQuery = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`
