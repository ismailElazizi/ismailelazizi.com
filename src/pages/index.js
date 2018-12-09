import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from "../components/project"
import Header from "../components/header"

const IndexPage = ({data }) => (

  

  <Layout>
    
    
    <div className='hero-section' >
        <div className="container">
            <Header></Header>
            <h1 className="who"><span role="img">{data.site.siteMetadata.hello}</span><br/>{data.site.siteMetadata.who}</h1>
        </div>
    </div>    
    <div className="container">
        <div className="projects-wrapper" >
        {data.allMarkdownRemark.edges.map(elment => <Project key={elment.node.id} post={elment.node} />)}
        </div>
    </div>

  </Layout>
)

export default IndexPage



export const pageQuery = graphql`
query FirstQuery {
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
              childImageSharp{
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
