import React from 'react'
import Layout from '../components/Layout'

const BlogPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="mainH">Blog</h1>
      <p>
        Ok. I know you are busy so I'll get straight to the point. I am a
        passionate UI/UX designer from Morocco. We help people create friendly
        website and application. That's it really. But if you want to know more
        you can click on some links. Or don't. It's your life.
      </p>
    </div>
  </Layout>
)

export default BlogPage

/*
export const pageQuery = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
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
*/
