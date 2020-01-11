import { graphql } from 'gatsby'
import React from 'react'
import Email from '../components/email'
import Layout from '../components/layout'
import Project from '../components/project'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="hero-css">
        <span role="img">{data.site.siteMetadata.hello}</span>
        <br />
        {data.site.siteMetadata.who}
      </h1>
    </div>

    <div className="posts-wrapper">
      {data.allMarkdownRemark.edges.map(elment => (
        <Project key={elment.node.id} post={elment.node} />
      ))}
    </div>

    <div className="divided-23" />
    <div className="callAction">
      <h3 className="hero-css contactH">Got a project? Let’s talk</h3>
      <Email />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1136, maxHeight: 796) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        hello
        who
      }
    }
  }
`
